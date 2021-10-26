import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        const url = (`http://localhost:5000/services/${serviceId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <h2>this is booking: {serviceId}</h2>
            <img src={service.img} alt="" />
        </div>
    );
};

export default Booking;