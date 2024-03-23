import { configureStore } from "@reduxjs/toolkit";  
import CategoryReducer from "./Categoryslice";
const store= configureStore({
    reducer:{
        CategoryNo: CategoryReducer
    }
})
export default store;