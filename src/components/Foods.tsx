import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import FoodSearch from './InputSearch';
import { getBaseUrl } from '@/helpers/config/envConfig';
import axios from 'axios';
import { IFood } from '@/constants/common';
import { useGetServiceQuery } from '@/redux/api/features/services/serviceApi';


const Foods: React.FC = () => {
  const { data: service } = useGetServiceQuery({limit: 2, page: 1})
  const handleSearch = (searchTerm: string) => {
    // const filteredResults = data.filter((food) =>
    //   food?.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setFilteredFoods(filteredResults);
  };

  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl text-center pb-10'>Foods</h1>
      <FoodSearch onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {service?.data.map((food:any) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
