import React from "react";
import masterCard from "../../../assets/images/mastercard.png";
import visa from "../../../assets/images/visa.png";

const Bitcoin = ({ selectedvalue, handlePayMent,radioGroup }) => {
  return (
    <div className="h-auto w-full p-3">
      <div className="w-full flex flex-row justify-between h-14 bg-red-800 overflow-hidden">
        <div className="w-full flex flex-row">
          <label>
            <input
              type="radio"
              name={radioGroup}
              value="bitcoin"
              checked={selectedvalue === "bitcoin"}
              id="bitcoin"
              onChange={handlePayMent}
            />
            Bitcoin
          </label>
        </div>

        <div className="w-[8rem] h-full flex flex-row items-center bg-green-600">
          <img src={visa} alt="" srcset="" className="h-12 w-auto " />
          <img src={masterCard} alt="" srcset="" className="w-auto h-8" />
        </div>
      </div>

      {selectedvalue === "bitcoin" && "YUUUUU"}
    </div>
  );
};

export default Bitcoin;
