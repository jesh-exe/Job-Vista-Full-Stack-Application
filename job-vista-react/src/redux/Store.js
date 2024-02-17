import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/LoginSlice'
import jobReducer from './slices/JobSeeker/RegisterJobSeekerSlice'
import loggedRecruiter from './slices/Recruiter/RecruiterSlice'
import applicant from './slices/Recruiter/ApplicantSlice'
import loggedJobSeeker from './slices/JobSeeker/JobSeekerSlice'
import jobs from "./slices/JobsSlice"

//Redux using Redux Toolkit
//Create a store to handle all the slices (Different state data)
export const store = configureStore({
    //All the reducers in the state, will be used globally by any component
    reducer: {
        // Giving the name to the property of the state and fetching it from the reducers in Login Slice.
        login: loginReducer,
        jobSeeker: jobReducer,
        loggedRecruiter: loggedRecruiter,
        applicant : applicant,
        loggedJobSeeker: loggedJobSeeker,
        "jobs" : jobs
    }
});