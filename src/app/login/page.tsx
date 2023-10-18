
'use client'

import { Player } from '@lottiefiles/react-lottie-player';
import React, { useState } from 'react';
import AnimationLottie from '../../../public/login.json'
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUserLoginMutation } from '@/redux/api/authApi';
import { storeUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { message } from '@/helpers/toast/toastHelper';
import { toast } from 'react-toastify';
import { decodedToken } from '@/utils/jwt';

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [userLogin] = useUserLoginMutation();
    const router = useRouter();
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }
    type IUserData = {
        email: string,
        password: string
    }
    const handleLogin = async (data: IUserData) => {
        try {
            const res = await userLogin({ ...data }).unwrap();
            if (res?.data?.accessToken) {
                storeUserInfo({ accessToken: res?.data?.accessToken });
                const data = decodedToken(res?.data?.accessToken) as any
                console.log(data.role)
                message.success(res.message);
                router.push(`/${data?.role}/profile`);
            }
          
        } catch (err: any) {
            console.error(err.message);
        }


    };
    return (
        <div className='container mx-auto'>
            <div className=" flex">
                <div className=" md:flex items-center justify-center my-20 hidden">
                    <Player autoplay loop src={AnimationLottie}></Player>
                </div>
                <div className="w-[100%]  bg-gradient-to-tr md:rounded-l-3xl">
                    <div className="w-[60%] lg:w-[55%] mx-auto my-24">
                        <h2 className="text-2xl font-medium">
                            Hello! Welcome back
                        </h2>
                        {/*form start */}
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string()
                                    .required("Email is required")
                                    .email("Invalid email address"),
                                password: Yup.string().required("Password is required"),
                            })}
                            onSubmit={handleLogin}
                        >
                            {(formikProps) => (
                                <Form className="py-10">
                                    {/* input email */}
                                    <label className={`block ${formikProps.touched.email && formikProps.errors.email ? "border-red-500" : ""}`}>
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                                            Email
                                        </span>
                                        <Field
                                            type="text"
                                            name="email"
                                            className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm ${formikProps.touched.email && formikProps.errors.email ? "border-red-500" : ""}`}
                                            placeholder="you@example.com"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500" />
                                    </label>
                                    {/* input password */}
                                    <div className="password-filed">
                                        <label className={`block mt-5 ${formikProps.touched.password && formikProps.errors.password ? "border-red-500" : ""}`}>
                                            <div className="flex">
                                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                                                    Password
                                                </span>
                                                <Link href="/resetPassword" className="ml-auto text-sm underline cursor-pointer">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </label>
                                        {passwordShown ? (
                                            <BsEyeFill onClick={togglePassword} className="eye text-blue-500" />
                                        ) : (
                                            <BsEyeSlashFill onClick={togglePassword} className="eye" />
                                        )}
                                        <Field
                                            type={passwordShown ? "text" : "password"}
                                            name="password"
                                            className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none   block w-full rounded-md sm:text-sm ${formikProps.touched.password && formikProps.errors.password ? "border-red-500" : ""}`}
                                            placeholder="Type your password"
                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-500" />
                                    </div>
                                    <button
                                        type="submit"
                                        className="py-3 w-full bg-gradient-to-br from-[#000080] via-[#000080] to-[#7D26CD] mt-10 border-2 border-white rounded-md font-medium cursor-pointer text-white"
                                    >
                                        Login
                                    </button>
                                    <div className="flex items-center py-6">
                                        <div className="h-[1px] w-[100%] bg-gray-400"></div>
                                        <span className=" mx-4">OR</span>
                                        <div className="h-[1px] w-[100%] bg-gray-400"></div>
                                    </div>

                                    <small className="">
                                        Dont have an account?{" "}
                                        <Link href="/signup" className="font-medium hover:underline">
                                            SignUp
                                        </Link>
                                    </small>
                                </Form>
                            )}
                        </Formik>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;