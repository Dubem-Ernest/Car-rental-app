import React, { useState } from "react";
import BillingInfo from "../../components/Booking_Components/BillingInfo";
import Confirmation from "../../components/Booking_Components/Confirmation";
import PaymentMethod from "../../components/Booking_Components/PaymentMethod";
import RentalInfo from "../../components/Booking_Components/RentalInfo";
import RentalSummary from "../../components/Booking_Components/RentalSummary";
import dayjs from "dayjs";
const Bookings = () => {

 const [billingInfo, setBillingInfo] = useState({
    name: "",
    phoneNumber:"",
    address:"",
    city:"",
 })

 const [rentalInfo, setRentalInfo] = useState({
  pickupLocation: null,
  pickupDate: null,
  pickupTime:dayjs(),
  dropoffLocation: "",
  dropoffDate: null,
  dropoffTime:dayjs(),
})




 const handleBillingChange = (e)=>{
    const {name,value} = e.target

    setBillingInfo((prevData)=>({
        ...prevData,
        [name]:value
    }))
 }

 
 function handlePickupDate(value) {
  setRentalInfo({
    ...rentalInfo,
    pickupDate: value,
  });
}
function handleDropoffDate(value) {
  setRentalInfo({
    ...rentalInfo,
    dropoffDate: value,
  });
}



  return (
    <div className="mx-auto container  h-auto ">
      <div className="py-6 grid md:grid-cols-8 grid-cols-1  gap-3 p-4">
        <div className="md:col-span-5  order-2 md:order-1 flex flex-col gap-8 px-2">
          <BillingInfo formData={billingInfo} handleChange={handleBillingChange} />
          <RentalInfo formData={rentalInfo} handleChange={handlePickupDate}/>
          <PaymentMethod />
          <Confirmation />
        </div>
        <div className="md:col-span-3  order-1 md:order-2 px-2">
          <RentalSummary />
        </div>
      </div>
    </div>
  );
};

export default Bookings;
