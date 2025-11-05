"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
