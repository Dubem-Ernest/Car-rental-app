import React from "react";
import masterCard from "../../../assets/images/mastercard.png";
import visa from "../../../assets/images/visa.png";
import MastercardForm from "./forms/MastercardForm";

const MasterCard = ({ selectedvalue, handlePayMent,radioGroup }) => {
  return (
    <div className="h-auto w-full p-2 bg-[#e0e9f4] rounded-md">
      <div className={`w-full flex flex-row justify-between h-6  overflow-hidden ${selectedvalue === "mastercard" && "mb-4"}`}>
        <div className="w-full flex flex-row items-center justify-between h-full">
          <label >
            {" "}
            <input
              type="radio"
              name={radioGroup}
              value="mastercard"
              checked={selectedvalue === "mastercard"}
              id="mastercard"
              onChange={handlePayMent}
            />
            <span className="px-2">Credit Card</span>
            
          </label>
        </div>

        <div className="w-[8rem] h-full flex flex-row items-center justify-center bg-green-600 ">
          <img src={visa} alt="" srcset="" className="h-full w-auto object-cover" />
          <img src={masterCard} alt="" srcset="" className="w-auto h-full object-cover" />
        </div>
      </div>

      {selectedvalue === "mastercard" && <MastercardForm/>}
    </div>
  );
};

export default MasterCard;
