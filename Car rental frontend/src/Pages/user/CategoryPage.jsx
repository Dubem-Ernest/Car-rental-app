import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBarFilterComponents from "../../components/FilterComponents/SideBarFilterComponents";
import FormWrapper from "../../components/DatePicker/FormWrapper";
import { cars } from "../../assets/car";
import LargeScreenCard from "../../components/Visitor Homepage/LargeScreenCard";
import MobileCard from "../../components/Visitor Homepage/MobileCard";
import useWindowWidth from "../../hooks/useWindowWidth";
//import RecommendedCars from "../../components/Detailspage/RecommendedCars";
const CategoryPage = () => {
  const width = useWindowWidth();
  const [filteredData, setFilteredData] = useState([]);
  const [carNumber, setcarNumber] = useState(1)
  const [selectedCars, setSelectedCars] = useState({
    type: [],
    noOfSeats: [],
    price: 100,
  });

  useEffect(() => {
    const applyFilters = () => {
      let updatedList = [...cars];

      // Filter by car type
      if (
        selectedCars.type.length > 0 ||
        selectedCars.noOfSeats.length > 0 ||
        selectedCars.price > 0
      ) {
        updatedList = updatedList.filter(
          (item) =>
            selectedCars.type.includes(item.carType) ||
            selectedCars.noOfSeats.includes(item.numberOfSeats.toString()) ||
            item.recentPrice <= Number(selectedCars.price)
        );
      }
      // Filter by price

      // console.log(updatedList)
      setFilteredData(updatedList);
    };

    applyFilters();
  }, [selectedCars]);

  // const handleLikeToggle = (id) => {
  //   setCarList((prevCars) =>
  //     prevCars.map((car) =>
  //       car.id === id ? { ...car, liked: !car.liked } : car
  //     )
  //   );
  // };

  return (
    <div className="grid md:grid-cols-8 md:grid-flow-col gap-6 h-auto mt-1 grid-cols-1">
      <div className="md:col-span-2 col-span-2 bg-red-600 hidden md:grid h-full">
        <SideBarFilterComponents
          selectedCars={selectedCars}
          setSelectedCars={setSelectedCars}
          filteredData={filteredData}
        />
      </div>

      <div className=" md:col-span-6  col-span-8  justify-center gap-6 h-full">
        <FormWrapper />

        {/* <RecommendedCars filteredData={filteredData}/> */}
        <div className="translate-y-[24rem] md:translate-y-[5rem] py-3 pl-5 mx-auto w-full  container ">
          {/* card position */}
          {/* grid grid-cols-1 lg:grid-cols-4 bg-green-500 w-full p-3 */}

          <div
            className={`grid grid-cols-1 md:grid-cols-3  gap-4 justify-center`}
          >
            {filteredData
              .slice(0, 9*carNumber)
              .map((car, i) =>
                width < 768 ? (
                  <MobileCard car={car} key={i} />
                ) : (
                  <LargeScreenCard car={car} key={i} />
                )
              )}
          </div>

          <div className=" container mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 w-full p-8">
            <p className="hidden md:block"></p>
            <div className="md:col-span-2 justify-between flex items-center">
              {" "}
              <Link onClick={()=>setcarNumber(2)} className="w-auto block md:ml-[6.5rem] py-2 px-3 rounded-md text-center bg-blue-500 text-white">
                Show more cars
              </Link>
              <p className="px-8 text-base text-slate-400">
                {cars.length} cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
