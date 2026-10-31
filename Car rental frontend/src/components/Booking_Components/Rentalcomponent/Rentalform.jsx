import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { dateStyles, timeStyles } from "../../../assets/styles/styles";
import AdjustIcon from "@mui/icons-material/Adjust";
import useGetLocation from "../../../hooks/useGetLocation";
import { toast } from "react-toastify";

const Rentalform = ({ formData, handleChange,action }) => {
  const [cities, error, errorMsg] = useGetLocation();
  

  function handleCitySelect() {
    if (error) {
      toast.error(errorMsg);
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="mb-4 px-2">
        <div className="flex mb-2  pb-2">
          <span className="pb-1 mr-1">
            <AdjustIcon fontSize="small" className="text-blue-500" />
          </span>
          <h2 className="pl-1 text-base pt-[0.15rem]">{action}</h2>
        </div>

        <div className="grid md:grid-cols-2 grid-col gap-4">
          <div className="w-full flex flex-col">
            <div className="flex flex-col">
              <span className="text-base">Locations</span>
            </div>

            <FormControl sx={{ marginTop: 1, width: "auto", minWidth: 120 }}>
              <InputLabel
                sx={{
                  "&.MuiFormLabel-root": {
                    fontSize: ".92rem",
                    marginTop: "-0.26rem",
                  },
                }}
                id="select-label"
              >
                Select your city
              </InputLabel>
              <Select
                sx={{
                  backgroundColor: "white ",
                  "&.MuiSelect-root": {
                    height: "2.8rem",
                  },
                }}
                labelId="select-label"
                id="my-select"
                value={formData.pickupLocation}
                name="place"
                label="Select location "
                onClick={handleCitySelect}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {cities.map((city) => (
                  <MenuItem key={city.name} value={city.name}>
                    {city.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* MuiFormControl-root */}
          <div className="w-full flex flex-col">
            <div className="flex flex-col">
              <span className="text-base">Date</span>
            </div>
            <FormControl
              sx={{ marginTop: 1 , width: "auto", minWidth: 120 }}
            >
              {" "}
              <DatePicker
                sx={{
                  backgroundColor: "whitesmoke",

                  "& .MuiFormControl-root": {
                    fontSize: ".78rem",
                    height: "2.8rem",
                  },
                  "& .MuiPickersSectionList-root": {
                    height: "2.8rem",
                  },
                  "& .MuiFormLabel-root": {
                    fontSize: ".92rem",
                    marginTop: "-0.26rem",
                  },
                }}
                label="Select your date"
                value={formData.pickupDate}
                onChange={handleChange}
                slots={{
                  openPickerIcon: ArrowDropDownIcon,
                }}
              />
            </FormControl>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex flex-col">
              <span className="text-base">Time</span>
            </div>

            <FormControl
              sx={{ marginTop: { md: 1 }, width: "auto", minWidth: 120 }}
            >
              {" "}
              <TimePicker 
                sx={{
                  backgroundColor: "whitesmoke",
                  borderRadius:".3755rem",

                  "& .MuiFormControl-root": {
                    fontSize: ".78rem",
                    height: "2.8rem",
                   
                  
                  },
                  "& .MuiPickersInputBase-root": {
                    height: "2.8rem",
                    borderRadius:".5rem",
                  },
                  "& .MuiFormLabel-root": {
                    fontSize: ".92rem",
                    marginTop: "-0.26rem",
                    
                  },
                }}
                label="Select your date"
                value={formData.pickupDate}
                onChange={handleChange}
                slots={{
                  openPickerIcon: ArrowDropDownIcon,
                }}
              />
            </FormControl>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Rentalform;
