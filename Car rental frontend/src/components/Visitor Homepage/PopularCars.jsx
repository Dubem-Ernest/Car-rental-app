import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import car from "../../assets/images/car.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PeopleIcon from "@mui/icons-material/People";
import Icon from "@mdi/react";
import { mdiSteering } from "@mdi/js";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { cars } from "../../assets/car";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css/autoplay"; // Import Autoplay CSS
import backendUrl from "../../utils/api/backendUrl"
import {useGetCarsQuery} from "../../Redux/slices/api"
import {getRandomCars} from "../../utils/helperFunctions"

const PopularCars = () => {
  const{data,error,isLoading} = useGetCarsQuery()
      
  console.log(data)

  if(isLoading) return <p>Loading....</p>
  if(error) return <p>Error: {error.message}</p>

  

 // const cars = getRandomCars(data,7)



 

  

  const handleLikeToggle = (id) => {
    // setCarList((prevCars) =>
    //   prevCars.map((car) =>
    //     car.id === id ? { ...car, liked: !car.liked } : car
    //   )
    // );
    return null;
  };

  // console.log(data);
  return (
    <div className="container px-5 mx-auto translate-y-[11rem] md:translate-y-0">
      <div className="w-full flex flex-row justify-between p-4">
        <p className="font-medium text-sm">Popular cars</p>
        <Link to="login" className="text-blue-300 text-base">
          view all
        </Link>
      </div>
      {/* card position */}
      {/* grid grid-cols-1 lg:grid-cols-4 bg-green-500 w-full p-3 */}

      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        modules={[Autoplay]} // Add Autoplay to modules
        autoplay={{
          delay: 3000, // Set delay in milliseconds (e.g., 3 seconds)
          disableOnInteraction: false, // Keep autoplay running after user interaction
        }}
        loop={true} // Optional: Enable continuous looping
      >
        { getRandomCars([...data],7).map((car, i) => (
          <SwiperSlide
            key={i}
            className="!w-[240px] sm:!w-[260px] md:!w-[280px] px-2 bg-slate-50 rounded-lg pb-3"
          >
            <div className="flex flex-row justify-between py-3">
              {" "}
              <div>
                {" "}
                <h1 className="text-base font-semibold">{car.carName}</h1>
                <p className="text-sm">{car.carType}</p>
              </div>
              <div
                onClick={() => handleLikeToggle(car.id)}
                className="cursor-pointer"
              >
                {!car.liked ? (
                  <FavoriteBorderIcon fontSize="small" />
                ) : (
                  <FavoriteIcon fontSize="small" className="text-red-500" />
                )}
              </div>
            </div>
            <div className="w-full object-cover  object-fit h-[10rem]">
              <img
                src={
                  car.displayImage
                    ? `${backendUrl}/getImages/${car.displayImage}`
                    : undefined
                }
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-row py-3 items-center justify-center">
              <div className="flex grow text-center">
                <p className="text-sm px-1 text-slate-500">
                  <LocalGasStationIcon fontSize="small" />
                </p>
                <span className=" md:text-base text-xs text-slate-500">
                  {car.gasolineCapacity}
                </span>
              </div>
              <div className="flex grow text-center">
                <p className="text-sm px-1 text-slate-500">
                  <PeopleIcon fontSize="small" />
                </p>
                <span className="md:text-base text-xs text-slate-500">
                  {car.numberOfSeats} People
                </span>
              </div>
              <div className="flex grow text-center">
                <p className="md:text-base text-sm px-1 text-slate-500">
                  <Icon path={mdiSteering} size={1} />
                </p>
                <span className="md:text-base text-sm text-slate-500">
                  {car.carSteering}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <h2 className="font-bold">${car.recentPrice}/</h2>
                  <span className="text-sm pt-1 pl-1">day</span>
                </div>
                {car.oldPrice && (
                  <p className="text-xs line-through text-gray-600">
                    ${car.oldPrice}
                  </p>
                )}
              </div>{" "}
              <Link className="w-24  py-2 px-1 rounded-sm text-center bg-blue-500 text-white">
                Rent now
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCars;
