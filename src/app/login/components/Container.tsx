import React from 'react'
import Form from './Form'
import "../login-style.scss"
import Image from 'next/image'

function Container() {
    return (
        <div className='main-box'>
            <Image src='/assests/download.png' alt='' height={500} width={500}></Image>
            <Form />
        </div>
    )
}

export default Container
