import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  users: [],
  user: {},
};

export const getUsers = createAsyncThunk("users/getUsers", async (data) => {
  try {
    let url = "/users";
    const res = await http.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const createUser = createAsyncThunk("users/createUser", async (fd) => {
  try {
    let url = "/users";
    const res = await http.post(url, fd);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const updateUser = createAsyncThunk("users/updateUser", async (fd) => {
  try {
    let url = `/users/${fd.get("id")}`;
    const res = await http.put(url, fd);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    console.log(id);
    let url = `/users/${id}`;
    const res = await http.delete(url);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
