import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormButton from "../DatePicker/FormButton";

// import Form from "./Form";

const Herosection = () => {
  return (
    <div className="md:h-auto pt-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full -translate-y-[8rem] md:translate-y-0 h-[24rem]  px-5 md:top-0 md:gap-8 ">
        <div className=" flex h-full md:h-auto rounded-lg bg-[url(/images/hero1.jpg)] bg-cover  items-start">
          <div className="pt-8 gap-2 h-auto md:w-3/4 w-full md:px-4 px-6  flex flex-col items-start md:text-start">
            <h2 className="text-xl md:text-3xl pb-2 md:pb-3 text-white">
              The Best Platform For Car Rental
            </h2>
            <p className="pt-1 md:pt-2 pb-[2rem] md:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              totam!
            </p>
            <Link
              to="/"
              className="flex md:block flex-row w-auto justify-start px-10 py-3 bg-white  text-center hover:bg-yellow-500 rounded-md"
            >
              Rental Car
            </Link>
          </div>
        </div>
        <div className=" hidden md:flex rounded-lg bg-[url(images/HeroSection2.jpg)] bg-cover items-start">
          {" "}
          <div className=" flex h-full md:h-auto rounded-lg   items-start">
            <div className="pt-4 gap-2 h-auto md:w-3/4 w-full md:px-4 px-2 flex flex-col  items-center md:items-start text-center md:text-start">
              <h2 className="text-2xl md:text-3xl p-3 text-white">
                The Best Platform For Car Rental
              </h2>
              <p className="px-2 pt-2 pb-[2rem] md:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                totam!
              </p>
              <Link
                to="/"
                className="flex md:block flex-row w-auto justify-start px-10 py-3 bg-white  text-center hover:bg-yellow-500 rounded-md"
              >
                Rental Car
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
