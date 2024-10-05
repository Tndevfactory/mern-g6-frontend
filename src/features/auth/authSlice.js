import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  user: localStorage["user"] ? JSON.parse(localStorage.getItem("user")) : {},
  // token: "",
};

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    let url = "auth/login";
    const res = await http.post(url, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const register = createAsyncThunk("auth/register", async (data) => {
  try {
    let url = "auth/register";
    const res = await http.post(url, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    deleteUser: (state) => {
      state.user = {};
      state.token = "";
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, deleteUser } = authSlice.actions;
export default authSlice.reducer;
