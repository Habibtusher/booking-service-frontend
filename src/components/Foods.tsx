import React from "react";
import FoodCard from "./FoodCard";
import FoodSearch from "./InputSearch";

import { useGetServiceQuery } from "@/redux/api/features/services/serviceApi";
import Loading from "@/app/loading";

const Foods: React.FC = () => {
  const { data: service,isLoading } = useGetServiceQuery({ limit: 10, page: 1 });
  const handleSearch = (searchTerm: string) => {};
if(isLoading){
  return <Loading/>
}
  return (
    <div className="container mx-auto">
      <div className="  w-max h-max mx-auto my-10 lg:my-20 relative ">
        <div className="bg-[#EEEEEE] relative z-10 ">
          <p className="text-lg md:text-2xl lg:text-2xl font-semibold text-center px-2 ">
            Food&apos;s
          </p>
        </div>
        <div className="zindex">
          <div className=" bg-[#EA972D] w-5/12 absolute -bottom-1 -left-1 px-6  ">
            0
          </div>
          <div className=" bg-[#EA972D] w-5/12 absolute -top-1 -right-1  ">
            0
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <FoodSearch onSearch={handleSearch} />
      </div>

      <div className="grid  sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2">
        {service?.data.map((food: any) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
