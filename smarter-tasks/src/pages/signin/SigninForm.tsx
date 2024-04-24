import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string,
    password: string
};

const SigninForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { email, password } = data;
        console.log(email, password)
        try {
            const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                console.log("User Credentials are incorrect");
                throw new Error('Sign-in failed');
            }
            const JsonRes = await response.json()
            // console.log(data.token)
            localStorage.setItem('authToken', JsonRes.token);
            localStorage.setItem('userData', JSON.stringify(JsonRes.user))
            console.log("Sign Succesfull");
            navigate('/account')
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input {...register('email', { required: true })} name="email" id="email" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Password:</label>
                <input {...register('password', { required: true })} name='password' id='password' className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                {errors.password && <span>This field is required</span>}
            </div>
            <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign In</button>
        </form>
    );
};

export default SigninForm;