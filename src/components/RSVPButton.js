import React from 'react';
import { useAuth } from '../context/AuthContext';

const RSVPButton = ({ eventId }) => {
    const { user } = useAuth();

    const handleRSVP = async () => {
        const response = await fetch(`/api/events/${eventId}/rsvp`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${user.token}` }
        });
        const data = await response.json();
        console.log(data);
    };

    return <button onClick={handleRSVP}>RSVP</button>;
};

export default RSVPButton;
