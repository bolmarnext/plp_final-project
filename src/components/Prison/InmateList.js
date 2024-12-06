import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InmateList = ({ token }) => {
    const [inmates, setInmates] = useState([]);

    const fetchInmates = async () => {
        try {
            const response = await axios.get('/api /prison/inmates', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setInmates(response.data);
        } catch (error) {
            console.error('Error fetching inmates:', error);
        }
    };

    useEffect(() => {
        fetchInmates();
    }, []);

    return (
        <div>
            <h2>Inmates</h2>
            <ul>
                {inmates.map(inmate => (
                    <li key={inmate.id}>{inmate.name} - NIN: {inmate.nin}</li>
                ))}
            </ul>
        </div>
    );
};

export default InmateList;