'use client';

import react from 'react';
// import states
import { useState, useTransition } from 'react';
// import server actions 
import { checkUserDetails } from '@/actions/auth';

export default function LoginForm() {
    // create the states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [showpass, setShowpass] = useState(false);
    const [isPending, startTransition] = useTransition()

    // handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log({email,password,user});
        //Send to Server actions for Verifications
        startTransition(async () => {
            await checkUserDetails({ email, password, user });
            setEmail('');
            setPassword('');
        });
    }
    return (
        <div className=''>
            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3'>
                {/* Type of User */}
                <div className='flex justify-between gap-2'>
                    <button className={user == 'Employer' ? `p-4 bg-blue-500 border-2 w-full text-white` : `p-4 bg-slate-100 border-2 w-full`}
                        onClick={() => setUser('Employer')}
                    >Employer</button>
                    <button className={user == 'Employee' ? `p-4 bg-blue-500 border-2 w-full text-white` : `p-4 bg-slate-100 border-2 w-full`}
                        onClick={() => setUser('Employee')}
                    >Employee</button>
                </div>
                {/* Log In Details */}
                <label htmlFor="emial">Email</label>
                <input type="email" placeholder='Enter Email'
                    required
                    className='bg-slate-100 p-3'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password Details */}
                <label htmlFor="password">Password</label>
                <div className='flex justify-between bg-slate-100 p-3'>
                    <input type={showpass ? 'text' : 'password'}
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-slate-100'
                        value={password}
                        required

                    />
                    <button
                        onClick={() => setShowpass(!showpass)}
                    >{showpass ? '☑️' : '❎'}</button>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <button className='p-2 bg-green-500 w-full text-white font-bold hover:bg-green-600'>Log in</button>
                </div>


            </form>

        </div>
    )
}