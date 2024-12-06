import React, { useState } from 'react';
import axios from 'axios';

const InmateForm = ({ token }) => {
    const [name, setName] = useState('');
    const [nin, setNin] = useState('');
    const [sentenceDuration, setSentenceDuration] = useState('');
    const [caseFileId, setCaseFileId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/prison/inmate', { name, nin, sentenceDuration, caseFileId }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Inmate added successfully!');
        } catch (error) {
            console.error('Error adding inmate:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Inmate Name" required />
            <input type="text" value={nin} onChange={(e) => setNin(e.target.value)} placeholder="NIN" required />
            <input type="number" value={sentenceDuration} onChange={(e) => setSentenceDuration(e.target.value)} placeholder="Sentence Duration (months)" required />
            <input type="text" value={caseFileId} onChange={(e) => setCaseFileId(e.target.value)} placeholder="Case File ID" required />
            <button type="submit">Add Inmate</button>
        </form>
    );
};

export default InmateForm;