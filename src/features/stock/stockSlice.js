import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  stockMovements: [],
};

export const getStockMovements = createAsyncThunk(
  "stock/getStockMovements",
  async (_) => {
    try {
      let url = "/stock";
      const res = await http.get(url);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const stockSlice = createSlice({
  name: "Stock",
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

export const { setUser, deleteUser } = stockSlice.actions;
export default stockSlice.reducer;
