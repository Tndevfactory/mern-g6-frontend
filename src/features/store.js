import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import productSlice from "./product/productSlice";
import stockSlice from "./stock/stockSlice";
export default configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    stock: stockSlice,
  },
});
