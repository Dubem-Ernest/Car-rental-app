import { useState } from "react";
import { Navigate, Outlet, useNavigate,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Redux/slices/reduxActions/authAction";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";

const SignInForm = () => {

  const navigate = useNavigate();
  const location =useLocation()
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Empty details");
    }
      

     // Dispatch Redux action and wait for response
    const res = await dispatch(userLogin(formData));

      if (res.meta.requestStatus === "fulfilled") {
        const role = res.payload.user.role;

        console.log(role)
        //navigate(role === "User" ? "/user" : "/admin");
        role === "User" && navigate("/user");
      }

    setFormData({
      email: "",
      password: "",
    })
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-auto h-auto flex flex-col gap-4 items-center justify-center"
    >
      <div className="w-full h-auto flex flex-col gap-3 text-center py-4">
        <h2 className="text-2xl font-semibold">Welcome back!</h2>
        <p className="text-sm">Sign in into your account</p>
      </div>

      <div className="relative w-full bg-white flex flex-row rounded-lg mb-3">
        <input
          type="text"
          value={formData.email}
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Email address...."
          className=" border-none focus:outline-none w-full h-9 p-2 rounded-lg"
        />
      </div>

      <div className="relative w-full bg-white flex flex-row rounded-lg">
        <input
          type={visible ? "text" : "password"}
          value={formData.password}
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
          className=" border-none focus:outline-none w-full h-9 p-2 rounded-lg"
        />

        <span
          className="px-2 pt-1 cursor-pointer"
          placeholder="Enter email address..."
          onClick={() => setVisible(!visible)}
        >
          {visible ? (
            <VisibilityOffIcon size="2x" style={{ fontSize: "1.3rem" }} />
          ) : (
            <VisibilityIcon style={{ fontSize: "1.3rem" }} />
          )}
        </span>
      </div>

      <div className="flex flex-row justify-between w-full px-4 py-2">
        <input type="checkbox" name="remeber_me" id="" className="w-4 h-4" />
        <p>forgot password?</p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex flex-grow bg-red-500 p-2 items-center justify-center rounded-lg w-full"
      >
       {loading ? "Signing user..." : "Sign in"} 
      </button>

      <div className="grid grid-cols-3 py-3 items-center justify-center w-full">
        <hr className="" />
        <span className="md:pl-3 pl-2  text-sm md:text-base">
          or continue with
        </span>
        <hr className="" />
      </div>
      {/* Sign up with socials */}

      <div className="grid grid-cols-2 gap-4 h-auto w-full">
        <button className="px-3 py-2 rounded-lg bg-red-500 w-full">
          <GoogleIcon /> <span className="text-sm">Google</span>
        </button>
        <button className="px-3 py-2 rounded-lg bg-red-500 w-full">
          <XIcon /> <span className="text-sm">Twitter</span>
        </button>
      </div>

      <div className="mx-auto">
        <p>
          Don't have an account{" "}
          <span className="text-purple-600 text-base">Sign up</span>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
