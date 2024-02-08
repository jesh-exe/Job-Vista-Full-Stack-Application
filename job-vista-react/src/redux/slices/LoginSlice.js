import { createSelector, createSlice } from "@reduxjs/toolkit";

//Slices are sub part of the State such as we want a login attribute in the state to be accessed by everyone, so we create a new Slice of login

const login = createSlice({
    // Giving a name to slice
    name: "LoggedInUser",
    //Setting the initial state to null
    initialState: { email: "", password: "" },
    reducers: {
        setLoggedInUser: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
});

export const getLoggedInUser = createSelector(
    (state) => state.login,
    (state) => state
)
export const { setLoggedInUser } = login.actions;
export default login.reducer;