import React from 'react'
import RegisForm from './components/RegisForm'
import './regis-style.scss'
import Image from 'next/image'
export default function RegisPage() {
    return (
        <div className='main-box'>

            <RegisForm />
            <Image src='/assests/download3.png' alt='' height={350} width={350}></Image>

        </div>

    )
}
