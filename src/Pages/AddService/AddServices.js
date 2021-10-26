import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css'


const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Success')
                    reset()
                }
            })
    };

    return (
        <div>
            <h1>Please submit the form carefully</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Enter Service Name' type='text' {...register("name")} />
                <textarea placeholder='Enter Service Description' {...register("description")} />
                <input placeholder='Enter Service Price' type='number' {...register("price")} />
                <input placeholder='Enter Service Image URL' {...register("image")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;