import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/LoginSlice'

//Redux using Redux Toolkit
//Create a store to handle all the slices (Different state data)
export const store = configureStore({
    //All the reducers in the state, will be used globally by any component
    reducer : {
        login : loginReducer 
    }
});