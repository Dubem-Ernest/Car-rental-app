import React from "react";
import paypal from "../../../assets/images/PayPal-Logo.wine.png";

const PayPal = ({ selectedvalue, handlePayMent, radioGroup }) => {
  return (
    <div className="h-auto w-full p-3">
      <div className="w-full flex flex-row justify-between h-14 bg-red-800 overflow-hidden">
        <div className="w-full flex flex-row">
          <label>
            <input
              type="radio"
              name={radioGroup}
              value="paypal"
              checked={selectedvalue === "paypal"}
              id="paypal"
              onChange={handlePayMent}
            />
            PayPal
          </label>
        </div>

        <div className="w-[8rem] h-full flex flex-row items-center bg-green-600">
          {/* <img src={visa} alt="" srcset="" className="h-12 w-auto " /> */}
          <img src={paypal} alt="" srcset="" className="w-auto h-20" />
        </div>
      </div>

      {selectedvalue === "paypal" && (
       <button onClick={null} className="bg-blue-500 rounded-md w-full p-4 flex items-center justify-center h-10">
       <img src={paypal} alt="Paypal_Logo" className="w-40 p-4 h-28 object-contain" />
     </button>
      )}
    </div>
  );
};

export default PayPal;
