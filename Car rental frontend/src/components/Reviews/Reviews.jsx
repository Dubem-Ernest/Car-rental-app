import React, { useState } from "react";
import StarRating from "../Rating/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const [show, setshow] = useState(false);
  return (
    <div className=" bg-gray-100">
      {" "}
      <div className="flex p-4">
        {" "}
        <h2 className="mr-4">Reviews</h2>
        <span className=" px-3 py-1 rounded-lg bg-blue-500 text-zinc-100 text-xs text-center">
          12
        </span>
      </div>
      <div className="overflow-y-auto h-56 bg-yellow-400">
        {" "}
        <div></div>
        <div className="w-full p-4 flex ">
          <div className="col-span-1 w-[10%] bg-pink-950 items-center justify-center flex">
            <div className="h-16 w-16 rounded-full  object-contain flex">
              <img
                src="/images/car.png"
                alt="you"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="col-span-6 bg-yellow-900 w-[90%] px-2">
            <div className="flex justify-between">
              <div>
                <h1>Alex Santon</h1>
                <p>CEO at Room20 inc.</p>
              </div>
              <div className="flex flex-col">
                <p>July,2022</p>
                <StarRating />
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quaerat nostrum earum odit aperiam nisi.
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex">
          <div className="col-span-1 w-[10%] bg-pink-950 items-center justify-center flex">
            <div className="h-16 w-16 rounded-full  object-contain flex">
              <img
                src="/images/car.png"
                alt="you"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="col-span-6 bg-yellow-900 w-[90%] px-2">
            <div className="flex justify-between">
              <div>
                <h1>Alex Santon</h1>
                <p>CEO at Room20 inc.</p>
              </div>
              <div className="flex flex-col">
                <p>July,2022</p>
                <StarRating />
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quaerat nostrum earum odit aperiam nisi.
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1 justify-center py-4 cursor-pointer">
        <FontAwesomeIcon icon={faCaretDown} />
        <p>More</p>
      </div>
    </div>
  );
};

export default Reviews;
