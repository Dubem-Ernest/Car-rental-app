import React, { useState } from "react";
import MasterCard from "./paymentcomponents/MasterCard";
import PayPal from "./paymentcomponents/PayPal";
import Bitcoin from "./paymentcomponents/Bitcoin";

const PaymentMethod = () => {
  const [selectedvalue, setselectedValue] = useState("mastercard");

  function handlePayMent(e) {
    setselectedValue(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="h-auto bg-slate-50 rounded-md px-2">
      <div className="flex flex-row justify-between">
        <div>
          <h1>Payment method</h1>
          <p>Please choose a payment method</p>
        </div>
        <div>
          <p>Step 3 of 4</p>
        </div>
      </div>

      <MasterCard
        selectedvalue={selectedvalue}
        handlePayMent={handlePayMent}
        radioGroup="payments"
      />
      <PayPal
        selectedvalue={selectedvalue}
        handlePayMent={handlePayMent}
        radioGroup="payments"
      />
      <Bitcoin
        selectedvalue={selectedvalue}
        handlePayMent={handlePayMent}
        radioGroup="payments"
      />
    </div>
  );
};

export default PaymentMethod;
