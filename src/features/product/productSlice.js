import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  products: [],
  product: {},
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (data) => {
    try {
      let url = "/products";
      const res = await http.get(url);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (fd) => {
    try {
      let url = "/products";
      const res = await http.post(url, fd);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (fd) => {
    try {
      let url = `/products/${fd.get("id")}`;
      const res = await http.put(url, fd);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      let url = `/products/${id}`;
      const res = await http.post(url, data);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setUser, deleteUser } = productSlice.actions;
export default productSlice.reducer;
