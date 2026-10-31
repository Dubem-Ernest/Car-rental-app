import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/api/api";
import { toast } from "react-toastify";

 const backendURL = "http://localhost:3000"

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { firstName, lastName, email, phoneNumber, password },
    thunkAPI
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }


      const { data } = await api.post(
        `${backendURL}/api/v1/auth/signup`,
        { firstName, lastName, email, phoneNumber, password },
        config
      );
      toast.success(data.message);
        return data;
        
    } catch (error) {
      toast.error("err.response.data.message"); 
      console.log(error)
      return thunkAPI.rejectWithValue(err.response.data.message);
      
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await api.post("/api/v1/auth/login", { email, password });

      // Destructure cleanly
      const { user, userToken } = data;

      // Persist to localStorage
      localStorage.setItem("userToken", userToken);
      localStorage.setItem("userInfo", JSON.stringify(user));
      localStorage.setItem("role", user.role);

      // Return clean object for the slice
      return { user, userToken };
    } catch (error) {
      const message =
        error.response?.data?.message || "Login failed. Please try again.";
        console.log(error.response)
      return thunkAPI.rejectWithValue(message);
    }
  }
);
