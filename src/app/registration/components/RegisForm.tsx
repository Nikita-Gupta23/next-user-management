"use client";
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    fName: yup.string().required("*First Name is required"),
    lName: yup.string().required("*Last Name is required"),
    emailAdd: yup.string().email("*Invalid email format").required("*Email is required"),
    contactNo: yup
        .string()
        .matches(/^[0-9]{10}$/, "*Phone number must be exactly 10 digits")
        .required("*Phone number is required"),
    password: yup
        .string()
        .min(6, "*Password must be at least 6 characters")
        .required("*Password is required"),
    confirmPass: yup
        .string()
        .oneOf([yup.ref("password")], "*Passwords do not match")
        .required("*Confirm Password is required"),
    accept: yup
        .boolean()
        .oneOf([true], "You must accept the terms and conditions"),
});



function RegisForm() {

    const [userData, setUserData] = useState({
        fName: '',
        lName: '',
        emailAdd: '',
        contactNo: '',
        password: '',
        confirmPass: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log("Form Data Submitted:", data);
        alert('Welcome! You are now registered')
    };

    return (

        <>
            <form className='form-box' onSubmit={handleSubmit(onSubmit)} >
                <div className='welcome-msg'>Join us here!</div>

                <div className='user-box'>
                    <input {...register("fName")} className='display-text' placeholder='First Name' />
                </div>
                {errors.fName && <p className="text-red-500 text-sm error-msg">{errors.fName.message}</p>}


                <div className='user-box'>
                    <input {...register("lName")} className='display-text' placeholder='Last Name' />
                </div>
                {errors.lName && <p className="text-red-500 text-sm error-msg">{errors.lName.message}</p>}

                <div className='user-box'>
                    <input {...register("emailAdd")} className='display-text' placeholder='Email Address' />
                </div>
                {errors.emailAdd && <p className="text-red-500 text-sm error-msg">{errors.emailAdd.message}</p>}

                <div className='user-box'>
                    <input {...register("contactNo")} className='display-text' placeholder='Phone Number' onKeyDown={(e) => {
                        if (
                            e.key !== "Backspace" &&
                            isNaN(Number(e.key))
                        ) {
                            e.preventDefault();
                        }
                    }} />
                </div>
                {errors.contactNo && <p className="text-red-500 text-sm error-msg" >{errors.contactNo.message}</p>}

                <div className='user-box'>
                    <input {...register("password")} type='password' className='display-text' placeholder='Set Password' />
                </div>
                {errors.password && <p className="text-red-500 text-sm error-msg">{errors.password.message}</p>}

                <div className='user-box'>
                    <input {...register("confirmPass")} type='password' className='display-text' placeholder='Confirm Password' />
                </div>
                {errors.confirmPass && <p className="text-red-500 text-sm error-msg">{errors.confirmPass.message}</p>}

                <div className='accept-box'>
                    <input type='checkbox' {...register("accept")} /><span className='accept-msg'>  I accept the Terms & Conditions</span>
                </div>
                {errors.accept && <p className="text-red-500 text-sm error-msg">{errors.accept.message}</p>}

                <button className='login-box' type="submit" >REGISTER</button>

                <div className='forgot'>Already a registered user? <a href='../login'><b>Login</b></a></div>

            </form>

        </>
    )
}

export default RegisForm
