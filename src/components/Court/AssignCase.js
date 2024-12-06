import React, { useState } from 'react';
import axios from 'axios';

const AssignCase = ({ token }) => {
    const [caseFileId, setCaseFileId] = useState('');
    const [judgeId, setJudgeId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/court/assign-case', { caseFileId, judgeId }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Case assigned to judge successfully!');
        } catch (error) {
            console.error('Error assigning case:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={caseFileId} onChange={(e) => setCaseFileId(e.target.value)} placeholder="Case File ID" required />
            <input type="text" value={judgeId} onChange={(e) => setJudgeId(e.target.value)} placeholder="Judge ID" required />
            <button type="submit">Assign Case</button>
        </form>
    );
};

export default AssignCase;