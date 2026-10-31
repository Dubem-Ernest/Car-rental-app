import { useState, useRef } from "react";
import Checkboxes from "./Checkboxes";
import {cars} from "../../assets/car"

const SideBarFilterComponents = ({selectedCars,setSelectedCars}) => {
 

  const focusPoint = useRef(selectedCars.price);

  const rangeHandler = (e) => {
    setSelectedCars((prev) => {
      let newState = {
        ...prev,
        price:e.target.value
      };
      return newState;
    });
    focusPoint.current = e.target.value;
  };

  // const carS = [...cars];

  return (
    <div className="w-auto h-auto bg-green-500 p-4">
      <div className="pb-4">
        <Checkboxes
          header="Type"
          cars={cars}
          selectedCars={selectedCars}
          setSelectedCars={setSelectedCars}
        />
      </div>
      <div>
        <Checkboxes
          header="Capacity"
          cars={cars}
          selectedCars={selectedCars}
          setSelectedCars={setSelectedCars}
        />
      </div>

      <div className="pt-8 w-full">
        <p className="py-4">Price</p>
        <input
          className="w-full"
          type="range"
          value={selectedCars.price}

           onChange={rangeHandler}
        />
        {/* You might need a second input for the upper bound of a range */}
        <p>Max. {focusPoint.current}</p>
      </div>
    </div>
  );
};

export default SideBarFilterComponents;
