"use client"
import { createSlice } from "@reduxjs/toolkit";

const categorySlice= createSlice({
    name: "CategoryNo",
    initialState: [],
    reducers:{
        selectedCategoryNo(state,action){
            state.push(action.payload)
        },
        removeCategoryNO(state,action){
            return state.filter(item=> item != action.payload && item == action.payload )
        }
    }
})
export const {selectedCategoryNo,removeCategoryNO}= categorySlice.actions;
export default categorySlice.reducer