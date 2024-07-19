// import React from 'react'
import Navbar from "./Navbar"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const Register = () => {
    
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors,isSubmitting}
    }= useForm()
    const navigate = useNavigate()
    const onSubmit=async (data)=>{
        const response = await fetch("http://localhost:3000/register",{
            method:"POST",
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
        )
       if(response.status==200) {
        console.log(response.status);
           navigate("/login")
       }else{
        alert("username already exists");
       }
       
    }
  return (
    <>
    <Navbar/>
    <div >
        <h2 className="text-center font-semibold text-xl">Register page</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-transparent bg-opacity-60 flex m-auto my-3 w-32 h-44 gap-4 flex-col">
            <input
            type="text" name="username" className="border-2 border-white rounded-3xl px-3 py-1 bg-transparent" placeholder="username"
            {...register("username",{
                required:true,                
            })}
             />
            <input
            type="password" name="password" className="border-2 border-white rounded-3xl px-3 py-1 bg-transparent" placeholder="password"
            {...register("password",{
                required:true,                
            })}
             />
            <input type="submit" className={isSubmitting?"hidden":""} value="submit" />
            {isSubmitting?<h2>Loading...</h2>:""}
        </form>
    </div>
    </>
  )
}

export default Register
