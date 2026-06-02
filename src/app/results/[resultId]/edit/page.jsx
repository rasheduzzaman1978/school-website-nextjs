// src/app/results/[resultId]/edit/page.jsx

import { getResultById } from "@/app/lib/data";
import EditResultForm from "./EditResultForm";

const ResultEditPage = async ({
params,
}) => {

const { resultId } = params;

const result =
await getResultById(
resultId
);

return ( <div className="max-w-5xl mx-auto p-6">

  <h2 className="text-2xl font-bold mb-6">
    ফলাফল সম্পাদনা করুন
  </h2>

  <EditResultForm
    result={result}
  />

</div>


);
};

export default ResultEditPage;
