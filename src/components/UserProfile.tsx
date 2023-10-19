"use client"
import { Avatar, Button, Card, Upload } from 'antd';
import axios from 'axios';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useGetSingleUserQuery, useUpdateProfileMutation, useUploadProfileImageMutation } from '@/redux/api/authApi';
import Loading from '@/app/loading';
import { message } from '@/helpers/toast/toastHelper';
import { getUserInfo } from '@/services/auth.service';
const UserProfile = () => {
    const [uploadProfileImage] = useUploadProfileImageMutation();
    const [updateProfile] = useUpdateProfileMutation();
    const [buttonLoading, setButtonLoading] = React.useState(false);
    const { email } = getUserInfo() as any;
    
    const { data, error, isLoading,refetch  } = useGetSingleUserQuery(email);
    // const uploadProfileImage = async (url: string) => {
    //     // const newData = {
    //     //   photo: url,
    //     // };
    //     // try {
    //     //   const { data } = await updateProfile(
    //     //     `${update_user_profile}${User.email}`,
    //     //     newData
    //     //   );
    //     //   if (data.status === "success") {
    //     //     toast.success("profile update successfully");
    //     //     setModal1Visible(true);
    //     //     getProfile();
    //     //   }
    //     // } catch (err) {
    //     //   console.log(err);
    //     // }
    // };

    const handleUpdate =async (values: any) => {
      const res:any = await updateProfile({
            email:email,
            data:values
        })
        if (res?.data?.success === true) {
            message.success("profile uploaded successfully")
            refetch()
        }
        console.log(values);
    }
    const uploadImage = async (options: any) => {
        setButtonLoading(true);
        const { file } = options;

        const imageData = new FormData();
        imageData.set("key", "ac8d9f66a12ed78ebde2e2558428a077");
        imageData.append("image", file);
        try {
            const { data } = await axios.post(
                "https://api.imgbb.com/1/upload",
                imageData
            );
            if (data.success === true) {
                // uploadProfileImage(data.data.display_url);
                const res:any = await uploadProfileImage({
                    email,
                    image:{
                       profileImage: data.data.display_url 
                    }
                    
                })
                if (res?.data?.success === true) {
                    message.success("profile image uploaded successfully")
                    refetch()
                }
                console.log(res?.data); 
                setButtonLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <Card className="p-3">
                <div>
                    <Avatar
                        size={80}
                        src={
                            data ?
                                data?.data.profileImage
                                : "https://joeschmoe.io/api/v1/random"
                        }
                    />
                    <Upload
                        className="mt-4"
                        customRequest={uploadImage}
                        showUploadList={false}
                    >
                        <Button
                            style={{
                                marginLeft: "20px",
                                backgroundColor: "#334669",
                                color: "#FFFFFF",
                                borderRadius: "5px",
                            }}
                            loading={buttonLoading}
                        >
                            Upload
                        </Button>
                    </Upload>
                </div>
                <Formik
                    initialValues={{
                        name: {
                            firstName: data ? data?.data?.name?.firstName : '',
                            middleName: data ? data?.data?.name?.middleName : "",
                            lastName: data ? data?.data?.name?.lastName : "",
                        },
                        email: data ? data?.data?.email : '',
                        gender: data ? data?.data?.gender : '',
                        presentAddress: data ? data?.data?.presentAddress : '',
                        permanentAddress: data ? data?.data?.permanentAddress : '',


                    }}

                    onSubmit={handleUpdate}
                >
                    {(formikProps) => (
                        <Form className="py-10">
                            <div className="lg:flex">
                                {/* Input for First Name */}
                                <div className="w-full lg:w-1/3 pr-2">
                                    <label className={`block`}>
                                        <span className="block text-sm font-medium">First Name</span>
                                        <Field
                                            type="text"
                                            name="name.firstName"
                                            className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm`}
                                            placeholder="Your First Name"
                                        />
                                        <ErrorMessage name="name.firstName" component="div" className="text-red-500" />
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
                                            className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm`}
                                            placeholder="Your Last Name"
                                        />
                                        <ErrorMessage name="name.lastName" component="div" className="text-red-500" />
                                    </label>
                                </div>
                            </div>

                            <div className='lg:flex'>
                                {/* Input email */}
                                <div className="w-full lg:w-1/2 pr-2">
                                    <label className={`block mt-5 ${formikProps.touched.email && formikProps.errors.email ? 'border-red-500' : ''}`}>
                                        <span className="block text-sm font-medium">Email</span>
                                        <Field
                                            disabled
                                            type="email"
                                            name="email"
                                            className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm ${formikProps.touched.email && formikProps.errors.email ? 'border-red-500' : ''}`}
                                            placeholder="you@example.com"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500" />
                                    </label>
                                </div>

                                {/* Input gender */}
                                <div className="w-full lg:w-1/2 pr-2">
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
                                </div>
                            </div>

                            <div className='lg:flex'>
                                {/* Input present address */}
                                <div className="w-full lg:w-1/2 pr-2">
                                    <label className={`block mt-5 ${formikProps.touched.presentAddress && formikProps.errors.presentAddress ? 'border-red-500' : ''}`}>
                                        <span className="block text-sm font-medium">Present Address</span>
                                        <Field
                                            type="text"
                                            name="presentAddress"
                                            className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm ${formikProps.touched.presentAddress && formikProps.errors.presentAddress ? 'border-red-500' : ''}`}
                                            placeholder="Your Present Address"
                                        />
                                        <ErrorMessage name="presentAddress" component="div" className="text-red-500" />
                                    </label>
                                </div>

                                {/* Input permanent address */}
                                <div className="w-full lg:w-1/2 pr-2">
                                    <label className={`block mt-5 ${formikProps.touched.permanentAddress && formikProps.errors.permanentAddress ? 'border-red-500' : ''}`}>
                                        <span className="block text-sm font-medium">Permanent Address</span>
                                        <Field
                                            type="text"
                                            name="permanentAddress"
                                            className={`mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm ${formikProps.touched.permanentAddress && formikProps.errors.permanentAddress ? 'border-red-500' : ''}`}
                                            placeholder="Your Permanent Address"
                                        />
                                        <ErrorMessage name="permanentAddress" component="div" className="text-red-500" />
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"

                                className="py-3 w-full bg-gradient-to-br from-[#000080] via-[#000080] to-[#7D26CD] mt-10 border-2 border-white rounded-md font-medium cursor-pointer text-white"
                            >
                                Update
                            </button>
                        </Form>
                    )}
                </Formik>

            </Card>
        </div>
    );
};

export default UserProfile;