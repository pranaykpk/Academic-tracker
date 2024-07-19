// import React from 'react'
import Navbar from "./Navbar"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm()
    const [response, setResponse] = useState(null)
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            const response1 = await fetch("http://localhost:3000/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response1.ok) {
                throw new Error("Network response was not ok");
            }

            const resp2 = await response1.json();
            // console.log(resp2);
            const username = resp2.username;
            localStorage.setItem("username",username)
            setResponse(resp2);

            if (response1.status === 200) {
                navigate("/app", { replace: true });
            }
        } catch (error) {
            console.error("Error:", error);
            setResponse({ error: error.message });
        }
    };
    // useEffect(() => {
    //     try {
    //         if (response && response.status == 200) {
    //             console.log(response)
    //             // navigate('/app', { replace: true });
    //         }
    //     } catch (error) {
    //         alert("something went wrong")
    //     }
    // }, [response])
    // const handleRegister=() => {
    //   navigate("/register",)
    // }


    return (
        <>
            <Navbar />
            <div className="container my-[5vh] w-[80vw] h-[75vh] border-2 border-white rounded-xl m-auto px-5 justify-start flex items-center ">
                <div className="  my-3 w-[30%] h-[70%]  ">
                    <form onSubmit={handleSubmit(onSubmit)} className=" flex gap-4 flex-col p-8">
                        <h2 className="text-center font-semibold text-xl mt-10">Login page</h2>
                        <input
                            type="text" name="username" className="border-2 border-white rounded-3xl px-3 py-1 bg-transparent" placeholder="username"
                            {...register("username", {
                                required: true,
                            })}
                        />
                        <input
                            type="password" name="password" className="border-2 border-white rounded-3xl px-3 py-1 bg-transparent" placeholder="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <input type="submit" className={isSubmitting ? "hidden" : ""} value="submit" />
                        {isSubmitting ? <h2>Loading...</h2> : ""}
                        {response && (response.status == 200 ? <h2>Login successful</h2> : <h2 className="text-red-500">Invalid username or password</h2>)}
                        <button type="button" className="text-blue-500 hover:underline rounded-3xl" onClick={() => { navigate("/register") }}>Create new Account</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login
// border-2 bg-gradient-to-tl border-white from-blue-600 to-teal-600 hover:bg-gradient-to-br