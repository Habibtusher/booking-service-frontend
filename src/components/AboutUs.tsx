"use client"
import { Card } from 'antd';
import React from 'react';

const AboutUs = () => {
    const [isContentVisible, setContentVisible] = React.useState(false);

    const revealContent = () => {
        setContentVisible(true);
    };

    const hideContent = () => {
        setContentVisible(false);
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="relative inline-block">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onMouseEnter={() => setContentVisible(true)}
                    onMouseLeave={() => setContentVisible(false)}
                >
                    Hover Me!
                </button>
                {isContentVisible &&
                    <div className="absolute top-10 left-0 w-96 bg-white p-4 border border-gray-300 shadow-md rounded-md">
                        <p className="text-gray-700">
                            Company Name: Your Company
                        </p>
                        <p className="text-gray-700">
                            Location: Your Location
                        </p>
                        <p className="text-gray-700">
                            Description: Your Company Description
                        </p>
                    </div>
                }
            </div>
        </div>

    );
};

export default AboutUs;