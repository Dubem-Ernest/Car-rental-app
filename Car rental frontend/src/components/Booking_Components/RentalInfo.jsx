import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

import Rentalform from "../Booking_Components/Rentalcomponent/Rentalform"

const RentalInfo = ({formData, handleChange}) => {
  return (

    <div className="min-w-0 min-h-0 bg-slate-50 rounded-md">
      <div className="flex justify-between px-2 py-4">
        <div className="">
          <h2 className="font-medium ">Rental Info</h2>
          <p className="font-light text-sm">Please select your rental date</p>
        </div>
        <p className="font-light text-sm">Step 2 of 4</p>
      </div>

      <div className="grid grid-cols-1 gap-2">
        < Rentalform formData={formData}  handleChange={handleChange} action="Pick up"/>
        < Rentalform formData={formData}  handleChange={handleChange} action="Drop off"/>
      </div>
    </div>
  );
};

export default RentalInfo;
