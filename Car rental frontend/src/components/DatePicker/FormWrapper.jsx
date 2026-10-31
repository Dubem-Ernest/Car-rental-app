import React, { useRef } from "react";
import Form from "./Form";
import FormButton from "./FormButton";

const FormWrapper = () => {

    const pickup = true;
    const pickupFormRef = useRef(null);
    const dropoffFormRef = useRef(null);
  
    const handleSubmitFromParent = () => {
      const pickupIsValid = pickupFormRef.current?.isValid();
      const dropoffIsValid = dropoffFormRef.current?.isValid();
  
      if (!pickupIsValid || !dropoffIsValid) {
        alert("Please fill in all fields for both pickup and dropoff.");
        return;
      }
  
      const pickupData = pickupFormRef.current?.getFormData();
      const dropoffData = dropoffFormRef.current?.getFormData();
  
      const combined = {
        pickup: pickupData,
        dropoff: dropoffData,
      };
  
      console.log("Submitting to backend:", combined);
  
      // 🛠️ Optional: Send to your backend API here
      // fetch("/api/rentals", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(combined),
      // });
    };
  return (
    <div className=" grid grid-cols-1 md:grid-cols-7 mx-auto w-full  container px-5 gap-1 md:gap-3 mt-6 md:relative md:top-0 absolute top-[18.2rem]">
      <div className="bg-slate-50 shadow-xl/30 col-span-3 rounded-lg">
        <Form pickup={true} ref={pickupFormRef} />
      </div>{" "}
      {/* center icon */}
      <FormButton handleSubmitFromParent={handleSubmitFromParent} />{" "}
      <div className="bg-slate-50 shadow-xl/30 col-span-3 rounded-lg -translate-y-[1rem] md:translate-y-0 md:mb-0">
        <Form pickup={false} ref={dropoffFormRef} />
      </div>
    </div>
  );
};

export default FormWrapper;
