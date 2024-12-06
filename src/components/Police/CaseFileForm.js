import React, { useState } from 'react';
import axios from 'axios';

const CaseFileForm = ({ token }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/police/case', { title, description }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Case file created successfully!');
        } catch (error) {
            console.error('Error creating case file:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Case Title" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
 <button type="submit">Create Case File</button>
        </form>
    );
};

export default CaseFileForm;