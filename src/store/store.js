import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../redux/MenuSlice";
//import productReducer from "../../redux/Product/productSlice";
//import shopReducer from "../../redux/shop/shopSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    //products: productReducer,
    //shop: shopReducer,
  },
});

export default store;
