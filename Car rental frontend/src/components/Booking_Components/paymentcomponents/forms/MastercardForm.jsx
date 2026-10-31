import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import "./datestyle.css";

const MastercardForm = () => {
  const [value, setvalue] = useState(null);

  

  return (
    <div className="container  w-full h-auto grid grid-cols-1 md:grid-cols-2  gap-4">
      <div className="col-span-1 flex flex-col gap-2 w-full">
        <label className="w-full mb-3">
          <p className="mb-1 text-sm font-semibold">Card number</p>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="Card number"
            className="placeholder:text-sm w-full p-[0.45rem] rounded-sm"
          />
        </label>

        <label className="w-full">
          <p className="mb-1 text-sm font-semibold">Card holder</p>{" "}
          <input
            type="text"
            name="cardHolder"
            id="cardHolderr"
            placeholder="Card holder"
            className="placeholder:text-sm w-full p-[0.45rem] rounded-sm"
          />
        </label>
      </div>
      <div className="col-span-1 flex flex-col gap-2 w-full ">
        <div className="w-full flex flex-col mb-3">
          <span className="mb-1 text-sm font-semibold">Expiration date</span>{" "}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {" "}
            <FormControl sx={{ width: "auto", minWidth: 120 }}>
              {" "}
              <DatePicker
                sx={{
                  backgroundColor: "whitesmoke",

                  "& .MuiFormControl-root": {
                    fontSize: ".78rem",
                    height: "2.8rem",
                  },
                  "& .MuiPickersSectionList-root": {
                    height: "2.5rem",
                    padding: ".8rem 0",
                    fontSize:".8rem"
                  },
                  "& .MuiFormLabel-root": {
                    fontSize: ".52rem",
                    marginTop: "-0.26rem",
                  },
                }}
                value={value}
                onChange={(newValue) => setvalue(newValue)}
                slots={{
                  openPickerIcon: "null",
                }}
               
              />
            </FormControl>
          </LocalizationProvider>
        </div>

        <label className="w-full">
          <p className="mb-1 text-sm font-semibold">CVC</p>

          <input
            type="text"
            name="cardHolder"
            id="cardHolderr"
            placeholder="CVC"
            className="placeholder:text-sm w-full p-[0.45rem] rounded-sm"
          />
        </label>
      </div>
    </div>
  );
};

export default MastercardForm;
