import React, { useEffect, useState } from 'react';

const ManageService = () => {

    const [service, setService] = useState([])
    useEffect(() => {
        const url = ('http://localhost:5000/services');
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = service.filter(service => service._id !== id)
                    setService(remaining)
                }
            })
    }
    return (
        <div>

            <h1>Manage Services</h1>
            {
                service.map(service => <div key={service._id}>
                    <h2>{service.name}</h2>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }

        </div>
    );
};

export default ManageService;