import { getResultById } from '@/app/lib/data';
import React from 'react';

const ResultDetailPage = async ({params}) => {
    const {resultId} = await params;
    const result = await getResultById(resultId);
    console.log(result);

    return (
        <div>
            <h2>বিস্তারিত ফলাফল</h2>
        </div>
    );
};

export default ResultDetailPage;