import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import useWindowWidth from "../../hooks/useWindowWidth";

const Confirmation = () => {
  const width = useWindowWidth();
  return (
    <div className="h-auto bg-slate-50 rounded-md px-4">
      <div className="flex justify-between py-4">
        <div className="">
          <h2 className="font-medium ">Confirmation</h2>
          <p className="font-light text-sm">
            We are getting to the end.Just few clicks and your rental is ready.
          </p>
        </div>
        <p className="font-light text-sm">Step 4 of 4</p>
      </div>

      <div className="w-full flex flex-row justify-between md:h-6 h-[4.5rem]  overflow-hidden md:mb-4">
        <div className="w-full flex flex-row items-center justify-between h-full">
          <label>
            {" "}
            <input
              type="checkbox"
              value="mastercard"
              checked={null}
              id="mastercard"
              onChange={null}
            />
            <span className="px-2 text-sm">
              I agree to receive marketting and newsletter emails. No spamming!
            </span>
          </label>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between md:h-6 h-[4.5rem]  overflow-hidden md:mb-4">
        <div className="w-full flex flex-row items-center justify-between h-full">
          <label>
            {" "}
            <input
              type="checkbox"
              value="mastercard"
              checked={null}
              id="mastercard"
              onChange={null}
            />
            <span className="px-2 text-sm">
              I agree to receive marketting and newsletter emails. No spamming!
            </span>
          </label>
        </div>
      </div>

      <div className="py-2 px-2 bg-blue-500 w-28 flex items-center justify-center rounded-md cursor-pointer text-white">
        Rent Now
      </div>

      <div className="flex flex-col py-3">
        {width < 768 ? (
          <VerifiedUserIcon fontSize="large" />
        ) : (
          <VerifiedUserIcon className="text-2xl" />
        )}
        <div className="h-auto ">
          <h2 className="font-semibold py-2">All your data are safe</h2>
          <p className="font-light text-sm">
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
