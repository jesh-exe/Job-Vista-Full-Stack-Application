import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/LoginSlice'
<<<<<<< HEAD
<<<<<<< HEAD
import jobReducer from './slices/RegisterJobSeekerSlice'
import loggedReducer from './slices/Recruiter/RecruiterSlice'
import applicant from './slices/Recruiter/ApplicantSlice'
=======
=======
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
import jobReducer from './slices/JobSeeker/RegisterJobSeekerSlice'
import loggedRecruiter from './slices/Recruiter/RecruiterSlice'
import applicant from './slices/Recruiter/ApplicantSlice'
import loggedJobSeeker from './slices/JobSeeker/JobSeekerSlice'
import jobs from "./slices/JobsSlice"
<<<<<<< HEAD
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
=======
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759

//Redux using Redux Toolkit
//Create a store to handle all the slices (Different state data)
export const store = configureStore({
    //All the reducers in the state, will be used globally by any component
    reducer: {
        // Giving the name to the property of the state and fetching it from the reducers in Login Slice.
        login: loginReducer,
        jobSeeker: jobReducer,
<<<<<<< HEAD
<<<<<<< HEAD
        loggedRecruiter: loggedReducer,
        applicant : applicant
=======
=======
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
        loggedRecruiter: loggedRecruiter,
        applicant : applicant,
        loggedJobSeeker: loggedJobSeeker,
        "jobs" : jobs
<<<<<<< HEAD
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
=======
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
    }
});