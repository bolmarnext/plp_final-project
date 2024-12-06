import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CaseFileList = ({ token }) => {
    const [caseFiles, setCaseFiles] = useState([]);

    const fetchCaseFiles = async () => {
        try {
            const response = await axios.get('/api/police/cases', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCaseFiles(response.data);
        } catch (error) {
            console.error('Error fetching case files:', error);
        }
    };

    useEffect(() => {
        fetchCaseFiles();
    }, []);

    return (
        <div>
            <h2>Case Files</h2>
            <ul>
                {caseFiles.map(caseFile => (
                    <li key={caseFile.id}>{caseFile.title} - {caseFile.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default CaseFileList;