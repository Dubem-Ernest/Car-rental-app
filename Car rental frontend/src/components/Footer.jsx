import React from "react";
import { Link } from "react-router-dom";
import FooterContent from "./FooterContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const footerContents = [
    "How it work",
    "Featured",
    "Partnership",
    "Business relation",
  ];
  const footerContents2 = ["Events", "Blogs", "Podcast", "Invite a friend"];
  const footerContents3 = ["Discord", "Twitter", "Instagram", "Facebook"];
  return (
    <div className=" px-3 bg-slate-50  h-auto">
      <div className="mx-auto container px-3 md:px-0">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-5 py-10">
          {/* logo/first div */}
          <div className="col-span-3 gap-5 md:pb-0 pb-10 ">
            <div className="w-80  flex flex-col gap-4">
              <Link to="/" className="flex flex-row gap-3">
                <FontAwesomeIcon
                  icon={faCar}
                  size="2x"
                  className="text-green-400 "
                />
                <h1 className="text-2xl text-[#3563e9] font-bold">D3!VE</h1>
              </Link>
              <p className="text-base text-blue-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                odio
              </p>
            </div>
          </div>

          {/*  second div */}
          <div className="col-span-2 ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-0">
              {" "}
              {/* About div */}
              <FooterContent content={footerContents} header="About" />
              {/* communiy div */}
              <FooterContent content={footerContents2} header="Community" />
              {/* socials div */}
              <FooterContent content={footerContents3} header="Socials" />
            </div>
          </div>
        </div>
        <hr className="w-full px-8 hidden md:block" />
        <div className="grid grid-cols-1 md:grid-cols-3 py-8">
          {/* first text */}
          <div className="col-span-2 order-2 md:order-1 ">
            <Link>
              <h2>©️2025 D3!VE.All rights reserved </h2>
            </Link>
          </div>
          <div className="pl-1 md:pl-0 col-span-1  flex flex-row justify-between order-1 md:order-2 pb-8 md:pb-0">
            {" "}
            {/* second text */}
            <div className="md:pl-4">
              <Link>
                <h2>Privacy & Policy </h2>
              </Link>
            </div>
            {/* third text */}
            <div>
              <Link>
                <h2>Terms & Condition </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
