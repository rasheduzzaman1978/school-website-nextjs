
import React from 'react';
import { getResults } from '../lib/data';
import ResultsTable from '@/components/ResultsTable';
import { addResult, deleteResult } from '../lib/action';
import AddResultModal from '@/components/AddResultModal';

const ResultsPage = async () => {
     const results = await getResults();
    
    return (
        <div>
            <div className='flex items-center justify-between mb-4'>
                <h2>মোট শিক্ষার্থী: {results.length}</h2>    
                <AddResultModal addResultAction={addResult}></AddResultModal>
            </div>
            
            <ResultsTable results={results} deleteResultAction = {deleteResult}></ResultsTable>
        </div>
    );
};

export default ResultsPage;