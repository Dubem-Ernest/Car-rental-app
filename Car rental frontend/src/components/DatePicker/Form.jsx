import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import  AdjustIcon from "@mui/icons-material/Adjust";
import useGetLocation from "../../hooks/useGetLocation"
import formStyles, { dateStyles, timeStyles } from "../../assets/styles/styles";

const Form = forwardRef((props, ref) => {
  const [cities,error,errorMsg] = useGetLocation()
  console.log(cities)
  // Form state
  const [pickUp, setPickup] = useState({
    date: dayjs(),
    time: dayjs(),
    place: "",
  });
  const [dropOff, setDropoff] = useState({
    date: dayjs(),
    time: dayjs(),
    place: "",
  });

  // console.log(pickUp.date)
  // const [error, setError] = useState(null);
  const formRef = React.useRef();

  useImperativeHandle(ref, () => ({
    getFormData: () => (props.pickup ? pickUp : dropOff),

    isValid: () => {
      const form = props.pickup ? pickUp : dropOff;
      return form.place !== "" && form.date && form.time;
    },

    submit: () => {
      const btn = formRef.current?.querySelector("button[type=submit]");
      if (btn) btn.click();
    },
  }));

 

 

  // Handle date change
  const handlePickUpDateChange = (newDate) => {
    setPickup({
      ...pickUp,
      date: newDate
    });
  };

  
  const handleDropOffDateChange = (newDate) => {
    setDropoff({
      ...dropOff,
      date: newDate,
    });
  };

  // Handle time change
  const handlePickUpTimeChange = (newTime) => {
    setPickup({
      ...pickUp,
      time: newTime,
    });
  };

  const handleDropOffTimeChange = (newTime) => {
    setDropoff({
      ...dropOff,
      time: newTime,
    });
  };

  function handlePickupSelectChange(e) {
    setPickup({
      ...pickUp,
      [e.target.name]: e.target.value,
    });
  }
  function handleDropoffSelectChange(e) {
    setDropoff({
      ...dropOff,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-col px-3 h-auto ">
        <div className="pl-4 flex items-center pt-2">
          <span className="pb-1">
            <AdjustIcon fontSize="small" className="text-blue-500"/>
          </span>
          <h1 className="px-2 text-base">{props.pickup ? "Pick-up" : "Drop-off"}</h1>
        </div>
        <form ref={formRef} className="grid grid-cols-3 gap-0 md:gap-4 p-2">
          {/* MUI Select */}
          <div className="flex flex-col border-r-[0.1rem] border-gray-300">
            <h2 className="ml-3 text-sm">Locations</h2>
            <FormControl fullWidth sx={formStyles}>
              <InputLabel id="select-label">Select your city</InputLabel>

              {props.pickup ? (
                <Select
                  labelId="select-label"
                  id="my-select"
                  value={pickUp.place}
                  name="place"
                  label="Choose Option"
                  onChange={handlePickupSelectChange}
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
              ) : (
                <Select
                  labelId="select-label"
                  id="my-select"
                  value={dropOff.place}
                  name="place"
                  label="Choose Option"
                  onChange={handleDropoffSelectChange}
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
              )}
            </FormControl>
          </div>

          <div className="flex flex-col border-r-[.6px] border-gray-300 px-2">
            {" "}
            <h2 className="ml-3 text-sm">Date</h2>
            {props.pickup ? (
              <DatePicker
                sx={dateStyles}
                
                value={pickUp.date}
                onChange={handlePickUpDateChange}
                slots={{
                  openPickerIcon: ArrowDropDownIcon,
                }}
              />
            ) : (
              <DatePicker
                sx={dateStyles}
                
                value={pickUp.date}
                onChange={handleDropOffDateChange}
                slots={{
                  openPickerIcon: ArrowDropDownIcon,
                }}
              />
            )}
          </div>

          {/* MUI TimePicker */}
          <div className="flex flex-col px-2">
            <h2 className="ml-3 text-sm">Time</h2>{" "}
            {props.pickup ? (
              <TimePicker
                sx={timeStyles}
               
                value={pickUp.time}
                onChange={handlePickUpTimeChange}
                slots={{
                  openPickerIcon: ArrowDropDownIcon,
                }}
              />
            ) : (
              <TimePicker
                sx={timeStyles}
                
                value={pickUp.time}
                onChange={handleDropOffTimeChange}
                slots={{
                  openPickerIcon: ArrowDropDownIcon,
                }}
              />
            )}
          </div>

          <button type="submit" style={{ display: "none" }} label="submit" />
        </form>
      </div>
    </LocalizationProvider>
  );
});

export default Form;
