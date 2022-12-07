import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartClice from "../components/cart-clice";
import uiSlice from "./ui-slice";


const store =configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart:cartClice.reducer, 
        ui:uiSlice.reducer,
    },
});
export default store;