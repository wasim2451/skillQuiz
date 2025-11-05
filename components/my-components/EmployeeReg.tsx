'use client';
import React from 'react'
import { useState,useTransition } from 'react'
interface Props {}

function EmployeeReg(props: Props) {
    // Client component 
    const {} = props
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[file,setFile]=useState(null);

    return (
        <>
            <h1 className='text-center'>This is a Employee Registration Form</h1>
            <div className='bg-slate-100 rounded-xl p-4 w-[500px] flex justify-center items-center'>
                <form action="" className='flex flex-col gap-3'>
                    <div className='flex justify-between'>
                         <input type="text" 
                         placeholder='First Name'
                         className='w-full'
                         value={firstName}
                         onChange={(e)=>e.target.value}
                         />
                         <input type="text"
                         placeholder='Second Name'
                         className='w-full'
                         value={lastName}
                         onChange={(e)=>e.target.value}
                         />
                    </div>
                </form>
            </div>
        </>
    )
}

export default EmployeeReg ;
