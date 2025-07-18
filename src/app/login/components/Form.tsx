"use client";
import React, { useState } from 'react'
import Image from 'next/image'


function Form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [btnColor, setBtnColor] = useState('');
    const [user] = useState({
        username: "Nikita Gupta",
        password: "123456"
    })
    const handleSubmit = (e: any) => {
        e.preventDefault();
        //alert("Submitted!")
        isValid()
    }
    const isValid = () => {
        if (username === user.username && password === user.password) {
            console.log("valid");
            setBtnColor('green');
            setTimeout(() => {
                alert('Submitted')
            }, 500)

        }
        else {
            setBtnColor('red');
            setTimeout(() => {
                alert('Invalid Credentials')
            }, 500)
            console.log("invalid");

        }
    }
    console.log(username, password, btnColor)
    return (
        <form onSubmit={handleSubmit}>

            <div className='form-box'>

                <div className='welcome-msg'>Welcome Back</div>

                <div className='user-box'>
                    <Image src="/assests/user.png" height={18} width={20} alt='username' className='img' />
                    <input type="text" id="name" name="name" value={username} required className='display-text' placeholder='Username / Email' onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className='user-box'>
                    <Image src="/assests/lock.png" height={18} width={20} alt='username' className='img' />
                    <input type="password" id="password" name="password" value={password} required minLength={8} className='display-text' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </div>

                {/* <div className='text-line'>*Your password must be at least 8 characters long.</div> */}
                {/* <p className='text'>Your password must be at least 8 characters long.</p> */}

                <button className='login-box' style={{ backgroundColor: btnColor }} type="submit">LOGIN</button>

                <div className='forgot'>Forgot Password?</div>

                <div className='forgot'>Don't have an account yet? <a href='../registration'><b>Register</b></a></div>

            </div >

        </form >
    )
}

export default Form
