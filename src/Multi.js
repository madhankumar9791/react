import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import './form.css';
 
export default function Multi() {
    const [data, setData] = useState({
        name: '',
        phone: '',
        gender: '',
        lang: [],
        city: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const checked = e.target.checked;

        if (e.target.type === 'checkbox') {
            if (checked) {
                setData((oldData) => ({ ...oldData, [name]: [...oldData[name], value] }));
            } else {
                setData((oldData) => ({ ...oldData, [name]: oldData[name].filter(item => item !== value) }));
            }
        } else {
            setData((oldData) => ({ ...oldData, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         
        setData({
            name: '',
            phone: '',
            gender: '',
            lang: [],
            city: ''
        });
    };

    return (
        <>


        <div className='container-fluid p-5 h-75 bg-primary text-white text-center'>
        <h1>Sign UP</h1>
        </div>
           
             <div className='container p-5 formh'>

 
            
            <form onSubmit={handleSubmit}>
                <label>Email :</label>
                <input onChange={handleChange} type="text" name='email' value={data.name} placeholder="enter your name" />
                <br /> <br />

                <label>Phone :</label>
                <input onChange={handleChange} type="number" name='phone' value={data.phone} placeholder="Enter your Number" />
                <br /> <br />

                <label>Gender :</label>
                <input onChange={handleChange} checked={data.gender === "male"} type="radio" name='gender' value='male' /> Male
                <input onChange={handleChange} checked={data.gender === 'female'} type="radio" name='gender' value='female' /> Female
                <br /> <br />

                <label>Language Known :</label>
                <input onChange={handleChange} type="checkbox" name='lang' value='English' checked={data.lang.includes('English')} /> English
                <input onChange={handleChange} type="checkbox" name='lang' value='Tamil' checked={data.lang.includes('Tamil')} /> Tamil
                <br /> <br />

                <label>Select City :</label>
                <select onChange={handleChange} name='city' value={data.city}>
                    <option value=''>Select City</option>
                    <option value='pondy'>Pondy</option>
                    <option value='chennai'>Chennai</option>
                </select>
                <br /> <br />

                <input type='submit' value='Register' />
            </form>

            </div>

            <div className='container-fluid bg-primary text-white text-center p-3'>
                <p> Copyright 2024 Fita Academy</p>
                </div>
        </>
    )
}