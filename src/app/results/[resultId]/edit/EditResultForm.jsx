"use client";

import {
Button,
Input,
Label,
Surface,
TextField,
} from "@heroui/react";

import { useRouter } from "next/navigation";

const EditResultForm = ({ result }) => {
const router = useRouter();

const handleSubmit = async (e) => {
e.preventDefault();

const form = Object.fromEntries(
  new FormData(e.currentTarget)
);

const payload = {
  studentId: form.studentId,
  name: form.name,

  academicYear: Number(
    form.academicYear
  ),

  class: form.class,

  section:
    form.section,

  examName:
    form.examName,

  subjects: {
    environment:
      Number(
        form.environment
      ),

    bangla:
      Number(
        form.bangla
      ),

    english:
      Number(
        form.english
      ),

    math:
      Number(
        form.math
      ),

    religion:
      Number(
        form.religion
      ),

    others:
      Number(
        form.others
      ),
  },

  total:
    Number(
      form.total
    ),

  position:
    Number(
      form.position
    ),

  attendance:
    form.attendance,
};

try {

  const res =
    await fetch(
      `http://localhost:8000/results/${result._id}`,
      {
        method:
          "PATCH",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify(
            payload
          ),
      }
    );

  if (
    !res.ok
  ) {
    throw new Error(
      "Update failed"
    );
  }

  router.push(
    "/results"
  );

  router.refresh();

} catch (
  error
) {
  console.error(
    error
  );
}


};

return ( <Surface className="p-6 rounded-xl">

  <form
    onSubmit={
      handleSubmit
    }
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-4
    "
  >

    <TextField
      name="studentId"
      defaultValue={
        result?.studentId
      }
    >
      <Label>
        শিক্ষার্থী আইডি
      </Label>

      <Input />
    </TextField>

    <TextField
      name="name"
      defaultValue={
        result?.name
      }
    >
      <Label>
        নাম
      </Label>

      <Input />
    </TextField>

    <TextField
      name="academicYear"
      defaultValue={
        result?.academicYear
      }
    >
      <Label>
        শিক্ষাবর্ষ
      </Label>

      <Input
        type="number"
      />
    </TextField>

    <TextField
      name="class"
      defaultValue={
        result?.class
      }
    >
      <Label>
        শ্রেণি
      </Label>

      <Input />
    </TextField>

    <TextField
      name="section"
      defaultValue={
        result?.section
      }
    >
      <Label>
        শাখা
      </Label>

      <Input />
    </TextField>

    <TextField
      name="examName"
      defaultValue={
        result?.examName
      }
    >
      <Label>
        পরীক্ষার নাম
      </Label>

      <Input />
    </TextField>

    <TextField
      name="environment"
      defaultValue={
        result?.subjects
          ?.environment
      }
    >
      <Label>
        পরিবেশ
      </Label>

      <Input
        type="number"
      />
    </TextField>

    <TextField
      name="bangla"
      defaultValue={
        result?.subjects
          ?.bangla
      }
    >
      <Label>
        বাংলা
      </Label>

      <Input
        type="number"
      />
    </TextField>

    <TextField
      name="english"
      defaultValue={
        result?.subjects
          ?.english
      }
    >
      <Label>
        ইংরেজি
      </Label>

      <Input
        type="number"
      />
    </TextField>

    <TextField
      name="math"
      defaultValue={
        result?.subjects
          ?.math
      }
    >
      <Label>
        গণিত
      </Label>

      <Input
        type="number"
      />
    </TextField>

    <TextField
      name="religion"
      defaultValue={
        result?.subjects
          ?.religion
      }
    >
      <Label>
        ধর্ম
      </Label>

      <Input
        type="number"
      />
    </TextField>

    <TextField
      name="others"
      defaultValue={
        result?.subjects
          ?.others
      }
    >
      <Label>
        অন্যান্য
      </Label>

      <Input
        type="number"
      />
    </TextField>

    <TextField
      name="total"
      defaultValue={
        result?.total
      }
    >
      <Label>
        মোট নম্বর
      </Label>

      <Input
        type="number"
      />
    </TextField>

    <TextField
      name="position"
      defaultValue={
        result?.position
      }
    >
      <Label>
        মেধাক্রম
      </Label>

      <Input
        type="number"
      />
    </TextField>

    <TextField
      name="attendance"
      defaultValue={
        result?.attendance
      }
    >
      <Label>
        উপস্থিতি
      </Label>

      <Input />
    </TextField>

    <div
      className="
        md:col-span-2
        flex
        justify-end
      "
    >

      <Button
        type="submit"
      >
        আপডেট করুন
      </Button>

    </div>

  </form>

</Surface>

);
};

export default EditResultForm;
