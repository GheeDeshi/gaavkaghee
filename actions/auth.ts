"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const signUp = async (formdata: FormData) => {
    const name = formdata.get("username");
    const email = formdata.get("email") as string;
  const password = formdata.get("password");
  const username = email.split("@")[0]


  const data = {
    email,
    password,
    name,
    username
  };



  try {
    console.log(data);
    
  } catch (error: any) {
    return {
        status: 500,
      error: error.message || "Something went wrong",
    };
  }
};

export const signIn = async (formdata: FormData) => {
  const email = formdata.get("email");
  const password = formdata.get("password");
  const data = {
    email: email,
    password: password,
  };



  try {
    console.log(data);
    
  } catch (error: any) {
    return {
        status: 500,
      error: error.message || "Something went wrong",
    };
  }
};

export const signOut = () => {};

export const resetPassword = () => {};

export const forgotPassword = () => {};

export const changePassword = () => {};

export const updateUser = () => {};

export const updateUserPassword = () => {};
