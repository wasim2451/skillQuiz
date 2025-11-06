import React from 'react'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
interface Props {}

async function Page(props: Props) {
    const {} = props
     const myCookies=await cookies();
        const token = myCookies.get('auth_token');
        // console.log(token);
        if(!token){
            redirect('/wasim/w_service/');
        }else if(token.value!=="123"){
            redirect("/wasim/w_service/");
        }

    return (
        <>
            <h1 className='text-center mt-3 font-bold'>Schedule Your Assessment Page</h1>
        </>
    )
}

export default Page
