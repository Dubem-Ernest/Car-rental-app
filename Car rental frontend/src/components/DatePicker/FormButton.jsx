import React from "react";
import ArrowDropDown from "../../assets/images/arrow-down-arrow-up-svgrepo-com.svg";

const FormButton = ({handleSubmitFromParent}) => {


    
  return (
    <div
      className="bg-[#2a59e3] z-20 -translate-y-[.5rem] md:translate-y-0 cursor-pointer col-span-1 h-16 w-16 flex items-center justify-center rounded-lg mx-auto my-auto"
      onClick={() => handleSubmitFromParent()}
    >
      <div className="w-8 h-8">
        <img src={ArrowDropDown} alt="" className="h-full" />
      </div>
    </div>
  );
};

export default FormButton;
