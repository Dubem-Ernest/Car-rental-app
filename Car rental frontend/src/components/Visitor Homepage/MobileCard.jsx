import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PeopleIcon from "@mui/icons-material/People";
import Icon from "@mdi/react";
import { mdiSteering } from "@mdi/js";
import { cars } from "../../assets/car";
import backendUrl from "../../utils/api/backendUrl";

const MobileCard = ({ car,isLoading }) => {
  return (
    <div className="w-auto h-auto inset-shadow-2xs bg-slate-50 rounded-lg p-2">
      {/* Top div */}
      <div className="flex flex-row justify-between py-3 px-2">
        {" "}
        <div className="w-auto h-auto">
          {" "}
          <h1 className="text-lg font-semibold">{car.carName}</h1>
          <p className="text-base">{car.carType}</p>
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

      {/* image and description div */}
      <div className="grid grid-cols-3">
        {" "}
        <div className="w-full object-cover  object-fit h-[10rem] col-span-2 py-3 px-2">
          <img
            src={
              !isLoading
                ? `${backendUrl}/getImages/${car.displayImage}`
                : undefined
            }
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col py-3 items-start justify-center">
          <div className="flex grow text-center">
            <p className="text-sm px-1 text-slate-500">
              <LocalGasStationIcon fontSize="small" />
            </p>
            <span className="text-base  text-slate-500">
              {car.gasolineCapacity}
            </span>
          </div>
          <div className="flex grow text-center">
            <p className="text-base px-1 text-slate-500">
              <PeopleIcon fontSize="small" />
            </p>
            <span className="text-base text-slate-500">
              {car.numberOfSeats} People
            </span>
          </div>
          <div className="flex grow text-center">
            <p className="text-base px-1 text-slate-500">
              <Icon path={mdiSteering} size={1} />
            </p>
            <span className="text-base  text-slate-500">{car.carSteering}</span>
          </div>
        </div>
      </div>

      {/* Lower div */}
      <div className="flex flex-row justify-between py-5 px-2">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h2 className="font-bold text-lg">${car.recentPrice}/</h2>
            <span className="text-base pt-1 pl-1">day</span>
          </div>
          {car.oldPrice && (
            <p className="text-sm line-through text-gray-600">
              ${car.oldPrice}
            </p>
          )}
        </div>{" "}
        <Link  to={`user/details/${car._id}`} className="w-36  py-2 px-3 rounded-sm text-center bg-blue-500 text-white">
          Rent now
        </Link>
      </div>
    </div>
  );
};

export default MobileCard;
