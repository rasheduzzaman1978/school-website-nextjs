import { getResultById, getResults } from "@/app/lib/data";
import Image from "next/image";

const subjectMap = {
  environment: "পরিবেশ পরিচিতি",
  bangla: "বাংলা",
  english: "ইংরেজি",
  math: "গণিত",
  science: "বিজ্ঞান",
  bawobi: "বাংলাদেশ ও বিশ্বপরিচয়",
  religion: "ধর্ম শিক্ষা",
  others: "অন্যান্য",
};

export default async function ResultDetailPage({
  params,
}) {
  const { resultId } = params;

  const current =
    await getResultById(resultId);

  const results =
    await getResults();

  if (!current) {
    return (
      <div className="py-20 text-center">
        ফলাফল পাওয়া যায়নি
      </div>
    );
  }

  const studentResults =
    results.filter(
      (item) =>
        item.studentId ===
          current.studentId &&
        item.academicYear ===
          current.academicYear
    );

  const first =
    studentResults.find(
      (r) =>
        r.examName ===
        "১ম প্রান্তিক মূল্যায়ন"
    ) || {};

  const second =
    studentResults.find(
      (r) =>
        r.examName ===
        "২য় প্রান্তিক মূল্যায়ন"
    ) || {};

  const final =
    studentResults.find(
      (r) =>
        r.examName ===
        "চূড়ান্ত মূল্যায়ন"
    ) || {};

      const lowerClass = [
        "প্রথম",
        "দ্বিতীয়",
        "১ম",
        "২য়",
      ];

      const subjectOrder =
      lowerClass.includes(current.class)
      ? [
        "bangla",
        "english",
        "math",
        "environment",
        "religion",
        "others",
      ]
      : [
        "bangla",
        "english",
        "math",
        "science",
        "bawobi",
        "religion",
        "others",
      ];
  
  const allSubjects = [
  ...new Set([
    ...Object.keys(first.subjects || {}),
    ...Object.keys(second.subjects || {}),
    ...Object.keys(final.subjects || {}),
  ]),
];

const subjectKeys =
subjectOrder.filter(
 (s) => allSubjects.includes(s)
);


    const subjectCount =
      lowerClass.includes(current.class)
      ? 6
      : 7;

  const avg = (n, count) =>
    count
      ? (
          n / count
        ).toFixed(2)
      : 0;

      const toBn = (value) =>
  String(value).replace(
    /\d/g,
    (d) => "০১২৩৪৫৬৭৮৯"[d]
  );
  

  return (
    <div id="print-area" className="bg-white min-h-screen  text-slate-900
dark:bg-[#04122d] dark:text-white transition-colors">

      <div className="w-full max-w-[210mm] mx-auto p-4 print:p-0">

        {/* HEADER */}

        <div className="text-center">

          <div className="flex items-center justify-center gap-4">

            <Image
              src="/logo.jpg"
              width={60}
              height={60}
              alt="logo"
              className="rounded-full border border-yellow-400 print:w-[60px] print:h-[60px]"
            />

            <div>

              <h1 className="text-green-800 text-xl md:text-4xl font-bold leading-tight print:text-[26px]">
                গয়হাট্টা মডেল সরকারি প্রাথমিক বিদ্যালয়
              </h1>

              <p className="text-sm md:text-base print:text-[12px]">
                ডাকঘরঃ গয়হাট্টা-৬৭৬২, ইউনিয়নঃ পূর্ণিমাগাতী,
              </p>

              <p className="text-sm md:text-base print:text-[12px]">
                উপজেলাঃ উল্লাপাড়া, জেলাঃ সিরাজগঞ্জ।
              </p>
              
              <p className="text-sm md:text-base print:text-[12px]">
                EMIS Code:
                91115010701, School Code: 117853
              </p>

              <p className="text-[12px] md:text-[14px] print:text-[10px]">
                 Email: ggps1929@gmail.com, Mobile: 01716-651946
              </p>
            </div>
           
            
          </div>
          <div className="w-full border-t-[3px] border-green-800 mt-4"></div>

          <div className="mt-5 flex justify-center">

            <h3
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-2
                border-2
                border-green-700
                rounded-md
                text-green-800
                text-xl
                font-bold
                tracking-wide
                bg-white
                print:text-[20px]
              "
            >
              মার্কশীট
            </h3>

          </div>
          <p className="mt-4 text-red-600 font-semibold">
            ১ম প্রান্তিক +
            ২য় প্রান্তিক +
            চূড়ান্ত মূল্যায়ন - {toBn(current.academicYear)}
          </p>

        </div>

        {/* INFO */}

        <table className="w-full border border-slate-300 dark:border-slate-700 mt-6 text-center text-xs md:text-base print:text-[16px]">

          <tbody>

            <tr>

              <td className="border p-2">
                নাম
              </td>

              <td className="border">
                {current.name}
              </td>

              <td className="border">
                আইডি
              </td>

              <td className="border">
                {current.studentId}
              </td>

            </tr>

            <tr>

              <td className="border p-2">
                শ্রেণি
              </td>

              <td className="border">
                {current.class}
              </td>

              <td className="border">
                শাখা
              </td>

              <td className="border">
                {current.section}
              </td>

            </tr>

            <tr>

              <td className="border p-2">
                রোল
              </td>

              <td className="border">
                {toBn(current?.roll?.toString() ?? "-")}
              </td>

              <td className="border">
                উপস্থিতি
              </td>

              <td className="border">
                {toBn(current.attendance?.toString() ?? "-")}
              </td>

            </tr>

          </tbody>

        </table>

        {/* RESULT */}

        <table className="w-full border border-slate-300 dark:border-slate-700 mt-5 text-center text-xs md:text-base print:text-[16px] break-inside-avoid">

          <thead>

            <tr>

              <th className="border p-2">
                বিষয়
              </th>

              <th className="border">
                ১ম
              </th>

              <th className="border">
                ২য়
              </th>

              <th className="border">
                চূড়ান্ত
              </th>

            </tr>

          </thead>

          <tbody>

            {subjectKeys.map(
              (subject) => (

                <tr key={subject}>

                  <td className="border p-2 text-left">
                    {
                      subjectMap[
                        subject
                      ] || subject
                    }
                  </td>

                  <td className="border">
                    {
                      toBn(
                        first?.subjects?.[
                          subject
                        ] ?? "-"
                      )
                    }
                  </td>

                  <td className="border">
                    {
                      toBn(
                        second?.subjects?.[
                          subject
                        ] ?? "-"
                      )
                    }
                  </td>

                  <td className="border">
                    {
                      toBn(
                        final?.subjects?.[
                          subject
                        ] ?? "-"
                      )
                    }
                  </td>

                </tr>

              )
            )}

            <tr>

              <td className="border p-2 font-bold">
                মোট
              </td>

              <td className="border">
                {
                  toBn(first.total || 0)
                }
              </td>

              <td className="border">
                {
                  toBn(second.total || 0)
                }
              </td>

              <td className="border">
                {
                  toBn(final.total || 0)
                }
              </td>

            </tr>

            <tr>

              <td className="border p-2 font-bold">
                গড়
              </td>

              <td className="border">
                {toBn(avg(first.total || 0, subjectCount))}
              </td>

              <td className="border">
                {toBn(avg(
                  second.total ||
                    0,
                  subjectCount
                ))}
              </td>

              <td className="border">
                {toBn(avg(
                  final.total ||
                    0,
                  subjectCount
                ))}
              </td>

            </tr>

            <tr>

              <td className="border p-2 font-bold">
                অবস্থান
              </td>

              <td className="border">
                {
                  toBn(first.position || "-")
                }
              </td>

              <td className="border">
                {
                  toBn(second.position || "-")
                }
              </td>

              <td className="border">
                {
                  toBn(final.position || "-")
                }
              </td>

            </tr>

          </tbody>

        </table>

        {/* SIGN */}

        <div className="mt-32 grid grid-cols-3 gap-10 text-center">

        <div>
          <div className="w-[150px] mx-auto border-t border-black mb-2"></div>
          <p>অভিভাবকের স্বাক্ষর</p>
        </div>

        <div>
          <div className="w-[150px] mx-auto border-t border-black mb-2"></div>
          <p>শ্রেণি শিক্ষকের স্বাক্ষর</p>
        </div>

        <div>
          <div className="w-[150px] mx-auto border-t border-black mb-2"></div>
          <p>প্রধান শিক্ষকের স্বাক্ষর</p>
        </div>

      </div>

      </div>

      <style>{`
@page{
  size:A4 portrait;
  margin:10mm;
}

@media print{

html,
body{
  margin:0 !important;
  padding:0 !important;
  background:#fff !important;
}

/* শুধু যেটা প্রিন্ট হবে */
body *{
  visibility:hidden;
}

#print-area,
#print-area *{
  visibility:visible;
}

#print-area{
  position:absolute;
  left:0;
  top:0;

  width:210mm;
  min-height:297mm;

  padding:8mm;
  box-sizing:border-box;

  background:white;
}

button{
  display:none !important;
}

table{
  width:100%;
  border-collapse:collapse;
  page-break-inside:avoid;
}

tr{
  page-break-inside:avoid;
}

img{
  max-width:100%;
}

}
`}</style>

    </div>
  );
}