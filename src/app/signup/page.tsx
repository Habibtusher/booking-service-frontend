'use client'

import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import AnimationLottie from '../../../public/login.json'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import { useUserRegisterMutation } from '@/redux/api/authApi';
import { message } from '@/helpers/toast/toastHelper';
import { useRouter } from 'next/navigation';
const SignUp = () => {
    const router = useRouter();
    const [userRegister] = useUserRegisterMutation()
    const handleRegister = async (data: any) => {
        try {
            const res = await userRegister({ ...data }).unwrap();
            message.success(res.message);
            router.push('/login');
        } catch (error) {

        }
        console.log(data);
    };
    return (
        <div className='container mx-auto'>
            <div className=" flex">

                <div className=" lg:flex items-center justify-center my-20 hidden">
                    <Player autoplay loop src={AnimationLottie}></Player>
                </div>
                <div className="w-[100%]  bg-gradient-to-tr md:rounded-l-3xl">
                    <div className="w-[75%] lg:w-[60%] mx-auto my-24">
                        <h2 className="text-center text-2xl font-medium  lg:hidden">
                            Register here
                        </h2>
                        {/*form start */}
                        <Formik
                            initialValues={{

                                gender: 'male',
                                password: '',
                                permanentAddress: '',
                                presentAddress: '',
                                email: '',
                                termsAndCon: false,
                            }}
                            validationSchema={Yup.object({
                                password: Yup.string().required('Password is required'),
                                email: Yup.string().email('Invalid email address').required('Email is required'),
                                termsAndCon: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
                                gender: Yup.string().required('Gender is required'),
                            })}
                            onSubmit={handleRegister}
                        >
                            {(formikProps) => (
                                <Form className="py-10">
                                    <div className="lg:flex">
                                        {/* Input for First Name */}
                                        <div className="w-full lg:w-1/3 pr-2">
                                            <label className={`block `}>
                                                <span className="block text-sm font-medium">First Name</span>
                                                <Field
                                                    type="text"
                                                    name="name.firstName"
                                                    className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm }`}
                                                    placeholder="Your First Name"
                                                />
                                                <ErrorMessage name="firstName" component="div" className="text-red-500" />
                                            </label>
                                        </div>

                                        {/* Input for Middle Name */}
                                        <div className="w-full lg:w-1/3 pr-2">
                                            <label className="block">
                                                <span className="block text-sm font-medium">Middle Name</span>
                                                <Field
                                                    type="text"
                                                    name="name.middleName"
                                                    className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm"
                                                    placeholder="Your Middle Name"
                                                />
                                            </label>
                                        </div>

                                        {/* Input for Last Name */}
                                        <div className="w-full lg:w-1/3">
                                            <label className={`block`}>
                                                <span className="block text-sm font-medium">Last Name</span>
                                                <Field
                                                    type="text"
                                                    name="name.lastName"
                                                    className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm `}
                                                    placeholder="Your Last Name"
                                                />
                                                <ErrorMessage name="lastName" component="div" className="text-red-500" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='lg:flex'>
                                        {/* Input password */}
                                        <div className="w-full lg:w-1/2 pr-2">
                                            <div className="password-field">
                                                <label className={`block mt-5 ${formikProps.touched.password && formikProps.errors.password ? 'border-red-500' : ''}`}>
                                                    <span className="block text-sm font-medium">Password</span>
                                                    <Field
                                                        type="password"
                                                        name="password"
                                                        className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm ${formikProps.touched.password && formikProps.errors.password ? 'border-red-500' : ''
                                                            }`}
                                                        placeholder="Your Password"
                                                    />
                                                    <ErrorMessage name="password" component="div" className="text-red-500" />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-1/2 pr-2">
                                            <label className={`block mt-5 ${formikProps.touched.email && formikProps.errors.email ? 'border-red-500' : ''}`}>
                                                <span className="block text-sm font-medium">Email</span>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm ${formikProps.touched.email && formikProps.errors.email ? 'border-red-500' : ''
                                                        }`}
                                                    placeholder="you@example.com"
                                                />
                                                <ErrorMessage name="email" component="div" className="text-red-500" />
                                            </label>
                                        </div>
                                        {/* Input email */}


                                    </div>
                                    <label className={`block mt-5 ${formikProps.touched.gender && formikProps.errors.gender ? 'border-red-500' : ''}`}>
                                        <span className="block text-sm font-medium">Gender</span>
                                        <Field as="select" name="gender" className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm">
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Field>
                                        <ErrorMessage name="gender" component="div" className="text-red-500" />
                                    </label>

                                    <div className='lg:flex'>
                                        <div className="w-full lg:w-1/2 pr-2">
                                            {/* Input permanent address */}
                                            <label className={`block mt-5 ${formikProps.touched.permanentAddress && formikProps.errors.permanentAddress ? 'border-red-500' : ''}`}>
                                                <span className="block text-sm font-medium">Permanent Address</span>
                                                <Field
                                                    type="text"
                                                    name="permanentAddress"
                                                    className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm ${formikProps.touched.permanentAddress && formikProps.errors.permanentAddress ? 'border-red-500' : ''
                                                        }`}
                                                    placeholder="Your Permanent Address"
                                                />
                                                <ErrorMessage name="permanentAddress" component="div" className="text-red-500" />
                                            </label>
                                        </div>
                                        <div className="w-full lg:w-1/2 pr-2">
                                            {/* Input present address */}
                                            <label className="block mt-5">
                                                <span className="block text-sm font-medium">Present Address</span>
                                                <Field
                                                    type="text"
                                                    name="presentAddress"
                                                    className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm"
                                                    placeholder="Your Present Address"
                                                />
                                            </label>
                                        </div>
                                    </div>



                                  
                                    <label className="block mt-5">
                                        <Field type="checkbox" name="termsAndCon" className="mr-2" />
                                        I accept the terms and conditions
                                    </label>
                                    <ErrorMessage name="termsAndCon" component="div" className="text-red-500" />

                                    <button
                                        type="submit"
                                        className="py-3 w-full bg-[#4A6CD1] mt-10 border-2 border-white rounded-md font-medium cursor-pointer text-white"
                                    >
                                        Register
                                    </button>

                                    <div className="flex items-center py-6">
                                        <div className="h-[1px] w-[100%] bg-gray-400"></div>
                                        <span className=" mx-4">OR</span>
                                        <div className="h-[1px] w-[100%] bg-gray-400"></div>
                                    </div>

                                    <small className="">
                                        Already have an account?{" "}
                                        <Link href="/login" className="font-medium hover:underline">
                                            Login
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

export default SignUp;