import { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/slices/reduxActions/authAction";

const SignUpForm = ({
  formData,
  handleChange,
  handlePhoneChange,
  setIsSignUp,
  setFormData,
  isSignUp,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) setIsSignUp(prev => !prev);
  }, [success]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.password ||
      !formData.confirmpassword
    ) {
      alert("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // You can replace this with your API call
    dispatch(registerUser(formData));
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmpassword: "",
   });
   
    setPasswordError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-auto h-auto flex flex-col gap-3 md:gap-4"
    >
      <h2 className="text-xl font-semibold pt-5 pb-1">Create an account</h2>

      {/* First & Last Name */}
      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 w-full">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          id="firstName"
          className="rounded-lg border-none focus:outline-none w-full md:w-1/2 h-9 p-2"
          placeholder="First name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          id="lastName"
          className="rounded-lg border-none focus:outline-none w-full md:w-1/2 h-9 p-2"
          placeholder="Last name"
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div className="relative w-full bg-white flex flex-row rounded-lg">
        <span className="px-2 pt-1">
          <EmailIcon />
        </span>
        <input
          type="email"
          name="email"
          value={formData.email}
          id="email"
          placeholder="Enter your email address..."
          className="border-none focus:outline-none w-full h-9 p-2 rounded-lg"
          onChange={handleChange}
        />
      </div>

      {/* Phone */}
      <div className="relative w-full">
        <PhoneInput
          defaultCountry="US"
          style={{ borderRadius: "0.5rem", height: "2.25rem", width: "100%" }}
          placeholder="Enter phone number...."
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
        />
      </div>

      {/* Password */}
      <div className="relative w-full bg-white flex flex-row rounded-lg">
        <input
          type={passwordVisible ? "text" : "password"}
          name="password"
          value={formData.password}
          id="password"
          placeholder="Password..."
          className="border-none focus:outline-none w-full h-9 p-2 rounded-lg"
          onChange={handleChange}
        />
        <span
          className="px-2 pt-1 cursor-pointer"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? (
            <VisibilityOffIcon style={{ fontSize: "1.3rem" }} />
          ) : (
            <VisibilityIcon style={{ fontSize: "1.3rem" }} />
          )}
        </span>
      </div>

      {/* Confirm Password */}
      <div className="relative w-full bg-white flex flex-row rounded-lg">
        <input
          type={confirmPasswordVisible ? "text" : "password"}
          name="confirmpassword"
          value={formData.confirmpassword}
          id="confirmpassword"
          placeholder="Confirm password"
          className="border-none focus:outline-none w-full h-9 p-2 rounded-lg"
          onChange={handleChange}
        />
        <span
          className="px-2 pt-1 cursor-pointer"
          onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          {confirmPasswordVisible ? (
            <VisibilityOffIcon style={{ fontSize: "1.3rem" }} />
          ) : (
            <VisibilityIcon style={{ fontSize: "1.3rem" }} />
          )}
        </span>
      </div>

      {/* Error Message */}
      {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="flex flex-1 bg-red-500 p-2 items-center justify-center rounded-lg text-white"
      >
        {loading ? "Creating user..." : "Create an account"}
      </button>

      {/* Divider */}
      <div className="grid grid-cols-3 py-3 items-center justify-center">
        <hr />
        <span className="md:pl-4 pl-2 text-sm md:text-base">
          Or sign in with
        </span>
        <hr />
      </div>

      {/* Social Sign-up */}
      <div className="grid grid-cols-2 gap-4 h-auto">
        <button className="px-3 py-2 rounded-lg bg-red-500 w-full text-white flex items-center justify-center gap-2">
          <GoogleIcon /> <span className="text-sm">Google</span>
        </button>
        <button className="px-3 py-2 rounded-lg bg-red-500 w-full text-white flex items-center justify-center gap-2">
          <XIcon /> <span className="text-sm">Twitter</span>
        </button>
      </div>

      <p className="text-sm px-6 text-gray-600">
        By creating an account, you agree to our Terms and Service.
      </p>
    </form>
  );
};

export default SignUpForm;
