import React from 'react'
import data from '@/w_lib/results.json'
interface Props {}

function Page(props: Props) {
    const {} = props
    let res=data;
    res=data.sort((a,b)=>b.percentage-a.percentage);
    console.log(res);


    return (
        <div className='mt-[15vh]'>
            <div className='text-center'>This is a Dashboard Page for Assessment </div>
            <div>
            </div>
        </div>
    )
}

export default Page
