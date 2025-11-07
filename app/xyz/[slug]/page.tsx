'use client';
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React from 'react'
import  Image  from 'next/image';
import { Search } from 'lucide-react';
import  Link  from 'next/link';
interface Props {}

function Page(props: Props) {
    const {} = props;
    const params=useParams();
    console.log(params);
    const router=useRouter();
    console.log(router);
    
    const pathname=usePathname();
    console.log(pathname);
    return (
        <>
        <div className='mt-10'>
        <h1>This is a Dynamic Page</h1>
        <p>{pathname}</p>
        <p>{params.slug}</p>
        </div>
        <div className='flex justify-center mt-3 items-center p-4 gap-2'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" alt="Firefox IMG" />
            <Image
            src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg'
                width={300}
				height={300}
				alt="Forefox Logo"
				placeholder="empty"
				priority={true}
                className='mb-5'
            />
            <Link 
            href="/"
            title='Go to Home Page'
            className='bg-blue-400 p-2'
            >Go to Home Page</Link>
        </div>
        </>
    )
}

export default Page
