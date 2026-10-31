import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import NavbarIcons from "./navbarIcons/NavIcons";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useIsAuthorized from "../hooks/useIsAuthorized";

const Navbar = () => {
  const { isAuthorized } = useIsAuthorized();
  

  const dataArray = ["faHeart", "faBell", "faGear","profile_picture"];

  

  return (
    <header className="w-full bg-slate-50 shadow-xl/30 h-60 md:h-24 flex flex-row md:items-center">
      <nav className="container mx-auto flex h-16  md:items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCar} size="2x" className="text-green-400" />
          <h1 className="text-xl text-[#3563e9] font-bold">D3!VE</h1>
        </Link>
        {/* Search bar with filter */}
        {!isAuthorized ? (
          <div className="w-auto md:flex flex-row gap-6 hidden">
            <div className="w-auto flex flex-row gap-5">
              <Link to="/" className="w-auto py-3 px-6  rounded-full border">
                Log in
              </Link>
              <Link
                to="/"
                className="w-auto py-3 px-6 bg-blue-500 rounded-full"
              >
                Register
              </Link>
            </div>

            {/* Contact Info */}
            <div className=" md:flex items-center gap-3">
              <div className="rounded-full border shadow-xl/30 bg-white py-2 px-2 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-green-500"
                  aria-label="Phone"
                />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-[#3563e9]">Need help?</p>
                <p className="text-[#3563e9]">+123 456 7890</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-auto md:flex flex-row gap-6 hidden">
            {dataArray.map((item) => (
              <div
                key={item}
                className="rounded-full border shadow-xl/30 bg-white py-3 px-4 flex items-center justify-center"
              >
                <NavbarIcons icon={item} />
              </div>
            ))}
          </div>
        )}

        <div className="lg:hidden block h-7 w-9 cursor-pointer mt-5 text-lg">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            className="w-full h-full text-xl"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
