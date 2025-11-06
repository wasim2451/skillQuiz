"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {saveEmployeeRegistartonDetails} from '@/w_lib/db'
// Server actions for authenticating user
export async function checkUserDetails({
    email,
    password,
    user,
}: {
    email: string;
    password: string;
    user: string;
}) {
    if (email === "test@gmail.com" && password === "1234") {
        const token = "123"; // later this will be JWT

        // ✅ await cookies() before using set()
        const cookieStore = await cookies();

        cookieStore.set("auth_token", token, {
            httpOnly: true,
            secure: true,
            path: "/",
            maxAge: 60 * 60 * 24, // 1 day
        });

        if (user === "Employee") {
            redirect("/wasim/w_service/employee_reg/");
        } else {
            console.log("Redirecting .....");
            redirect("/wasim/w_service/employer_reg/");
        }
    } else {
        return { error: "Invalid credentials" };
    }
}
//Server actions for saving details of Employee 
export async function saveDeatilsOfEmployee(
    data: { firstname: string; 
    lastname: string;
    email: string; 
    phone: string, 
    file: File | null }) {
        const res=await saveEmployeeRegistartonDetails(data);
        if(res.status===true){
            redirect("/wasim/w_service");
        }else{
            redirect("/");
        }

}