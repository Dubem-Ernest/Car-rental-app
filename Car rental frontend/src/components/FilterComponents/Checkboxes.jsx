import { useState } from "react";


const  Checkboxes = ({ header, cars, selectedCars, setSelectedCars }) => {
  const handleCheckboxTypeOfCar = ({ target: { checked, value } }) => {
    setSelectedCars((prev) => {
      const types = Array.isArray(prev.type) ? prev.type : [];

      let newState = {
        ...prev,
        type: checked
          ? [...types, value]
          : types.filter((item) => item !== value),
      };
      return newState;
    });
  };

  const handleCheckboxSeat = ({ target: { checked, value } }) => {
    setSelectedCars((prev) => {
      const noOfSeats = Array.isArray(prev.noOfSeats) ? prev.noOfSeats : [];

      let newState = {
        ...prev,
        noOfSeats: checked
          ? [...noOfSeats, value]
          : noOfSeats.filter((item) => item !== value),
      };
      return newState;
    });
  };

  function value(arr, v) {
    if (typeof v != "string") {
      let requiredNum = arr.filter((item) => item.numberOfSeats === v);
      return requiredNum.length;
    }else{
      let requiredNum = arr.filter((item) => item.carType === v);
      return requiredNum.length;
    }
  }

  

  const uniqueValues = [
    ...new Set(
      cars.map((item) => (header == "Type" ? item.carType : item.numberOfSeats))
    ),
  ];

  //  console.log(uniqueValues);

  return (
    <div className="h-auto w-auto ">
      <div className="py-4">
        <h3>{header}</h3>
      </div>
      <ul className="flex flex-col gap-2 pl-1">
        {header == "Type"
          ? uniqueValues.map((car, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  value={car}
                  checked={selectedCars.type.includes(car)}
                  onChange={handleCheckboxTypeOfCar}
                />
                <label className="px-2">
                  {car} {`(${value(cars, car)})`}
                </label>
              </li>
            ))
          : [...uniqueValues]
              .sort((a, b) => a - b)
              .map((car, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    value={car}
                    checked={selectedCars.noOfSeats.includes(car.toString())}
                    onChange={handleCheckboxSeat}
                  />
                  <label className="px-2">
                    {car} {typeof car != "string" && "persons"} {`(${value(cars, car)})`}
                  </label>
                </li>
              ))}
      </ul>
    </div>
  );
};

export default Checkboxes;
