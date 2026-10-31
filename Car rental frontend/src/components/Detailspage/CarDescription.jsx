import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


{/* <Link
to="/user/bookings"
className="w-36  py-2 px-3 rounded-md text-center bg-blue-500 text-white "
>
Rent now
</Link> */}


const CarDescription = () => {
  const car = useSelector((state) => state.cardescription.car)
  console.log(car)
  return (
    <div   className="flex flex-row justify-between pt-14 pb-6">
      <div className="">

      </div>
      
       

        
      
    
    </div>
  );
};

export default CarDescription;
