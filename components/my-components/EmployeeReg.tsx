'use client';
import React, { ChangeEvent } from 'react'
import { useState,useTransition } from 'react'
import {saveDeatilsOfEmployee} from '@/actions/auth'
interface Props {}

function EmployeeReg(props: Props) {
    // Client component 
    const {} = props
    const[isPending,startTransition]=useTransition();
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[file,setFile]=useState< File | null>(null);

    async function handleEmployeeRegistration(e:React.FormEvent){
        e.preventDefault();
        const data ={firstname,lastname,email,phone,file};
        console.log(data);
        //send the data to server ( server actions ) 
        // redirect to 
        // alert("Registered Successfully");
        startTransition(async()=>{
            await saveDeatilsOfEmployee(data);
        })
    }

    function handleFileChange(e:ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files.length > 0){
            console.log(e.target.files[0]);
            setFile(e.target.files[0]);
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-slate-100 rounded-xl  w-[500px] border-2 border-black p-[20px] min-h-fit'>
                <form action="" className='flex flex-col gap-3' 
                 onSubmit={handleEmployeeRegistration}
                >
                    {/* Name Section */}
                    <div className='flex justify-between items-center  gap-2'>
                         <input type="text" 
                         placeholder='First Name'
                         className='w-full border-2 border-black p-1'
                         value={firstname}
                         onChange={(e)=>setFirstName(e.target.value)}
                         />
                         <input type="text"
                         placeholder='Second Name'
                         className='w-full border-2 border-black p-1'
                         value={lastname}
                         onChange={(e)=>setLastName(e.target.value)}
                         />
                    </div>
                    {/* Emial Section */}
                    <input type="email"
                     required={true}
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     placeholder='Enter your email'
                    />
                    {/* Phone Section */}
                    <input type="tel" 
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    placeholder='Enter Phone Number'
                    />
                    {/* File Upload Section */}
                    <input type="file" name="resume" id=""
                    placeholder='Upload Resume'
                    onChange={handleFileChange}
                    className='bg-yellow-300'
                    />
                    {/* Submit Button */}
                    <button className='bg-green-500 p-2'
                    type='submit'
                    > {!isPending ? "Submit":"Submitting ..."} </button>

                </form>
            </div>
        </div>
    )
}

export default EmployeeReg ;
