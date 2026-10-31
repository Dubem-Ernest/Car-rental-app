import React, { useState } from "react";
import { Link } from "react-router-dom";
import LargeScreenCard from "./LargeScreenCard";
import MobileCard from "./MobileCard";
import useWindowWidth from "../../hooks/useWindowWidth"
import {useGetCarsQuery} from "../../Redux/slices/api"



const RecommendedCars = () => {
     //const [carList, setCarList] = useState(() => [...cars].slice(0, 8));
     const width = useWindowWidth();
      // const {data} = useGetAllCars();


      const{data,error,isLoading} = useGetCarsQuery()
      
      console.log(data)

      if(isLoading) return <p>Loading....</p>
      if(error) return <p>Error: {error.message}</p>

  return (
    <div className="container mx-autos translate-y-[11rem] md:translate-y-0 w-full py-3 px-5">
      <div className="w-full flex flex-row justify-between p-4">
        <p className="font-medium text-sm">Recommended cars</p>
      </div>
      {/* card position */}
      {/* grid grid-cols-1 lg:grid-cols-4 bg-green-500 w-full p-3 */}

      <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden`}>
        {data.slice(0,10)?.map((car, i) => (
           width < 768 ? <MobileCard car={car} key={i} isLoading={isLoading} /> :  <LargeScreenCard car={car} key={i} isLoading={isLoading}/>
        ))}
      </div>
      <div className=" container mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 w-full p-8">
        <p className="hidden md:block"></p>
        <div className="md:col-span-2 justify-between flex items-center">
          {" "}
          <Link className="w-auto block md:ml-[6.5rem] py-2 px-3 rounded-md text-center bg-blue-500 text-white">
            Show more cars
          </Link>
          <p className="px-8 text-base text-slate-400">{data.length} cars</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCars;
