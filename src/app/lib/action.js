"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// নতুন ফলাফল যোগ করার Server Action
export const addResult = async (resultData) => {
  // "use server";

  // FormData থেকে object তৈরি করা
  // যেমন:
  // { name: "...", class: "...", total: "372" }
  const form = Object.fromEntries(resultData.entries());

  // API/Database অনুযায়ী data structure তৈরি করা
  const newResult = {
    studentId: form.studentId,
    name: form.name,

    // string → number convert
    academicYear: Number(form.academicYear),

    class: form.class,
    section: form.section,
    examName: form.examName,

    // subjects object এর ভিতরে subject marks রাখা
    subjects: {
      environment: Number(form.environment),
      bangla: Number(form.bangla),
      english: Number(form.english),
      math: Number(form.math),
      religion: Number(form.religion),
      others: Number(form.others),
    },

    total: Number(form.total),
    position: Number(form.position),

    attendance: form.attendance,
  };

  // console এ final data দেখাবে
  console.log("New Result:", newResult);

  // backend API তে POST request পাঠানো
  const res = await fetch(
    "http://localhost:8000/results",
    {
      method: "POST",

      // JSON data পাঠানো হচ্ছে
      headers: {
        "Content-Type": "application/json",
      },

      // cache ব্যবহার না করে fresh request
      cache: "no-store",

      // object → JSON
      body: JSON.stringify(newResult),
    }
  );

  // API response JSON এ convert
  const data = await res.json();

  // request fail হলে error throw
  if (!res.ok) {
    throw new Error(
      data?.message ||
      "Failed to add result"
    );
  }

  // results page নতুন data দিয়ে refresh
  revalidatePath("/results");

  // save হওয়ার পরে results page এ redirect
  redirect("/results");
};

// ফলাফল update করার Server Action
export const updateResult = async (resultId, resultData) => {
  // "use server";

  // FormData থেকে object তৈরি করা
  // যেমন:
  // { _id: "...", name: "...", class: "...", total: "372" }
  const form = Object.fromEntries(resultData.entries());

  // API/Database অনুযায়ী data structure তৈরি করা
  const updatedResult = {
    studentId: form.studentId,
    name: form.name,
    academicYear: Number(form.academicYear),
    class: form.class,
    section: form.section,
    examName: form.examName,
    subjects: {
      environment: Number(form.environment),
      bangla: Number(form.bangla),
      english: Number(form.english),
      math: Number(form.math),
      religion: Number(form.religion),
      others: Number(form.others),
    },
    total: Number(form.total),
    position: Number(form.position),
    attendance: form.attendance,
  };

  // console এ final data দেখাবে
  console.log("Updated Result:", updatedResult);

  // backend API তে PATCH request পাঠানো
  const res = await fetch(
    `http://localhost:8000/results/${resultId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(updatedResult),
    }
  );

  // API response JSON এ convert
  const data = await res.json();

  // request fail হলে error throw
  if (!res.ok) {
    throw new Error(
      data?.message ||
      "Failed to update result"
    );
  }

  // results page নতুন data দিয়ে refresh
  revalidatePath("/results");

  // update হওয়ার পরে results page এ redirect
  redirect("/results");
};

// ফলাফল delete করার Server Action
export const deleteResult = async (resultId) => {
  // "use server";

  // backend এ delete request
  const res = await fetch(
    `http://localhost:8000/results/${resultId}`,
    {
      method: "DELETE",

      // সবসময় fresh data
      cache: "no-store",
    }
  );

  // response JSON
  const data = await res.json();

  // error handling
  if (!res.ok) {
    throw new Error(
      data?.message ||
      "Failed to delete result"
    );
  }

  // delete হওয়ার পরে page refresh
  revalidatePath("/results");

  return data;
};