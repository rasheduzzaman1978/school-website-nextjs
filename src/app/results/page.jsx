
import React from 'react';
import { getResults } from '../lib/data';
import ResultsTable from '@/components/ResultsTable';

const ResultsPage = async () => {
     const results = await getResults();
    
    return (
        <div>
            <h2>মোট শিক্ষার্থী: {results.length}</h2>
            <ResultsTable results={results}></ResultsTable>
        </div>
    );
};

export default ResultsPage;