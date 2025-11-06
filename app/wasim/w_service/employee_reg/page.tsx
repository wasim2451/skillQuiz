import React from 'react'
import EmployeeReg from '@/components/my-components/EmployeeReg'
interface Props {}
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
async function Employee_Registration_Page(props: Props) {
    //Server Component -> Inside render Client Component
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
        <h1 className='text-center'>This is Employee Registration Page</h1>
        <EmployeeReg/>
        </>
    )
}

export default Employee_Registration_Page;
