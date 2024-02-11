import { createSelector, createSlice } from "@reduxjs/toolkit";

//Slices are sub part of the State such as we want a login attribute in the state to be accessed by everyone, so we create a new Slice of login

const initState = {
    User: {
        email: "",
        password: ""
    }
}

const login = createSlice({
    // Giving a name to slice
    name: "LoggedInUser",
    //Setting the initial state to default values
    initialState: initState,
    // creating reducers to perform operations on the state
    reducers: {
        //reducer for setting the new User
        setLoggedInUser: (state, action) => {
            state.User = action.payload
        }
    }
});

//Exporting the login state from the store directly, so that we dont need to use login.email everytime
export const getLoggedInUser = createSelector(
    (state) => state.login.User,
    (state) => state
)
// exporting the action reducer so that it can be used to dispatch from any component
export const { setLoggedInUser } = login.actions;
//Exporting the reducer to be used in the Store
export default login.reducer;