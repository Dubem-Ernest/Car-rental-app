import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StarRating from "../Rating/StarRating";
import backendUrl from "../../utils/api/backendUrl";

const RentalSummary = () => {
  const car = useSelector((state) => state.cardescription.car);
  console.log(car)
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {

  //   // Define an asynchronous function inside the effect
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/mockup") // Replace with your API endpoint
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const jsonData = await response.json();
  //       setImages(jsonData.files[0].filename)
  //       setLoading(false)
  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //       setImages(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData()

  //   // Call the function

  // }, []);

  return (
    <div className="w-auto h-auto bg-slate-50 p-3 rounded-md">
      <div className="pt-1 pb-[1.5rem]">
        <h1 className="font-semibold text-xl">Rental summary</h1>
        <p className="text-sm">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>
      <div className="h-20  mb-[2.25rem]">
        <div className="w-full flex flex-row h-full">
          <div className="h-full rounded-md w-28">
            <img
              src={car.displayImage ? `${backendUrl}/getImages/${car.displayImage
              }`: undefined }
              alt="Car"
              className="h-full rounded-md w-full object-cover"
            />
          </div>
          <div className="flex flex-col py-8 px-3 ">
            <h1 className="text-xl">{car.carName}</h1>
            <div className="flex flex-row items-center justify-center">
              <StarRating rentalSummary={true} />
              <span className="text-xs pl-2">440+ Reviewers</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px bg-neutral-quaternary border-1" />
      <div className="flex flex-row justify-between mt-[2rem]">
        <div className="flex flex-col">
          <h2>Sub-total</h2>
          <h2>Tax</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold">${car.recentPrice}</h2>
          <h2 className="font-semibold">${car.oldPrice ? car.oldPrice : "0.00"}</h2>
        </div>
      </div>

      <div className="w-full h-[3rem] flex flex-row items-center p-4 bg-slate-200 mt-4">
        <input
          type="text"
          name="promoCode"
          id="promoCode"
          placeholder="Enter promo code"
          className="w-[80%] h-auto border-none outline-none bg-slate-200"
        />{" "}
        <div className="h-auto cursor-pointer">
          <span className="font-semibold text-sm">Apply now</span>{" "}
        </div>
      </div>

      <div className="h-auto  w-full my-4 flex flex-row justify-between items-center">
        <div className="">
          <h1 className="font-semibold">Total rental price</h1>
          <p className="text-xs">Overall price and includes rental discount</p>
        </div>
        <h1 className="font-semibold text-2xl">${car.recentPrice}</h1>
      </div>
    </div>
  );
};

export default RentalSummary;
