// app/wasim/dashboard/page.tsx
'use client';
import React, { use } from 'react'
import { getData } from '@/actions/serverFetch' // fetching from actions folder
import { useState, useTransition } from 'react'
import Link from 'next/link';


interface Props { }

function Page(props: Props) {
const [data, setData] = useState<{ id: number; title: string }[] | null>(null);
const [isPending, startTransition] = useTransition();
const handleClick = () => {
startTransition(async () => {
    const res = await getData();
    setData(res);
    console.log(res);
})
}
return (
<div className='flex justify-center items-start'>
    <div className='mt-[10%]'>
        <p className='text-3xl font-[900]'> Wasim Dashboard Page</p>
        <div>
            <button className='bg-slate-500 p-2 text-sm rounded-sm my-3 font-semibold text-white' onClick={handleClick}>Fetch Data</button>
            <hr className='border-b-8' />
            {
                data != null ? data.map((item: { id: number, title: string }) => <div className='border-b py-2 ' key={item.id}>
                    <Link className='flex justify-start items-center gap-2' href={`/wasim/dashboard/${item.id}`}>
                    <pre className='text-yellow-500 cursor-pointer '>{item.id}</pre>
                    <pre className='hover:underline cursor-pointer'>{item.title}</pre>
                    </Link>
                </div>) : isPending ? <p>Loading ...</p> : null
            }
        </div>
    </div>
</div>
)
}

export default Page;
