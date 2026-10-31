import React from "react";

const BillingInfo = ({ formData, handleChange }) => {
  return (
    <div className="min-w-0 min-h-0 px-2 bg-slate-50 rounded-md">
      <div className="flex justify-between pb-3 pt-2">
        <div className="">
          <h2 className="font-medium ">Billing Info</h2>
          <p className="font-light text-sm">Please enter your billing info</p>
        </div>
        <p className="font-light text-sm">Step 1 of 4</p>
      </div>
      <div className="order-1 md:order-2 grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        <div className="col-span-1 grid grid-rows-2 gap-2 h-auto space-y-0">
          <label  for="name" className="flex flex-col"><span className="py-2">Name </span><input
            className="p-2 rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          /></label>
          
          <label for="address" className="flex flex-col"><span className="py-2">Address</span><input
            className="p-2 rounded-md"
            id="address"
            type="text"
            name="address"
            placeholder="Address "
            value={formData.address}
            onChange={handleChange}
          /></label>
        
        </div>
        <div className="col-span-1 grid grid-rows-2 gap-2">
          <label for="phoneNumber" className="flex flex-col"><span className="py-2">Phone number</span><input
            className="p-2 rounded-md"
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
          /></label>
          

          <label for="city" className="flex flex-col"><span className="py-2">City</span><input
            className="p-2 rounded-md"
            id="city"
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          /></label>
          
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
