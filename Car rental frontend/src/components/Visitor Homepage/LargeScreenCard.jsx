import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PeopleIcon from "@mui/icons-material/People";
import Icon from "@mdi/react";
import { mdiSteering } from "@mdi/js";
import { Link } from "react-router-dom";
import backendUrl from "../../utils/api/backendUrl";

const LargeScreenCard = ({ car, i, isLoading }) => {
  return (
    <div
      key={i}
      className="!w-[200px] sm:!w-[240px] md:!w-[260px] px-2 bg-slate-50 rounded-lg pb-3 inset-shadow-2xs"
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
            !isLoading ? `${backendUrl}/getImages/${car.displayImage}` : undefined
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
          <span className=" text-sm text-slate-500">
            {car.gasolineCapacity}
          </span>
        </div>
        <div className="flex grow text-center">
          <p className="text-sm px-1 text-slate-500">
            <PeopleIcon fontSize="small" />
          </p>
          <span className=" text-sm text-slate-500">
            {car.numberOfSeats} People
          </span>
        </div>
        <div className="flex grow text-center">
          <p className="text-sm px-1 text-slate-500">
            <Icon path={mdiSteering} size={1} />
          </p>
          <span className=" text-sm text-slate-500">{car.carSteering}</span>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h2 className="font-bold text-sm">${car.recentPrice}/</h2>
            <span className="text-sm  pl-1">day</span>
          </div>
          {car.oldPrice && (
            <p className="text-xs line-through text-gray-600">
              ${car.oldPrice}
            </p>
          )}
        </div>{" "}
        <Link to={`user/details/${car._id}`} className="w-30  py-2 px-3 rounded-sm text-center bg-blue-500 text-white">
          Rent now
        </Link>
      </div>
    </div>
  );
};

export default LargeScreenCard;
