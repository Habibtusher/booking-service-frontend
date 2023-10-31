import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import FoodSearch from './InputSearch';
import { getBaseUrl } from '@/helpers/config/envConfig';
import axios from 'axios';
import { IFood } from '@/constants/common';
import { useGetServiceQuery } from '@/redux/api/features/services/serviceApi';


const Foods: React.FC = () => {
  const { data: service } = useGetServiceQuery({limit: 10, page: 1})
  const handleSearch = (searchTerm: string) => {

  };

  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl text-center pb-10'>Foods</h1>
      <div className='flex items-center justify-center w-full'>
        <FoodSearch onSearch={handleSearch} /> 
      </div>
     
      <div className="grid  sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2">
        {service?.data.map((food:any) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
