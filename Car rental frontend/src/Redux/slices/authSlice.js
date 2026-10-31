import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./reduxActions/authAction";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;


  //console.log(userToken)

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      // "Mutating" update, handled by Immer
    },
    logout: (state) => {
      state.userToken = null;
      localStorage.removeItem('userToken');
    },
  },
  extraReducers: (builder) => {
    // log in user
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userToken = payload.userToken
    }),
      builder.addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      }),
      // register user
      builder.addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true; // registration successful
        
      }),
      builder.addCase(registerUser.rejected, (state , { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
