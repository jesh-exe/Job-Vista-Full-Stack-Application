import { createSelector, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const initState = {
    loggedJobSeeker: {
        "name": "",
        "email": "",
        "contactNumber": "",
        "gender": "",
        "portfolioLink": "",
        "skills": "",
        "gitRepositoryLink": "",
        "appliedJobs": [{
            "jobId": "",
            "applicationId": "",
            "recruiterName": "",
            "jobCategory": "",
            "role": "",
            "applicationStatus": "",
            "expectedSalary": "",
            "companyLogo": "",
            "companyName": "",
        }],
        "profilePhoto": ""
    }
}


const loggedJobSeeker = createSlice({
    name: "LoggedJobSeeker",
    initialState: initState,
    reducers: {
        setLoggedJobSeekerDetails: (state, action) => {
            state.loggedJobSeeker = action.payload;
        },
        resetLoggedJobSeekerDetails: (state, action) => {
            state.loggedJobSeeker = initState.loggedJobSeeker;
        }
    }
})


export const getLoggedJobSeeker = createSelector(
    (state) => state.loggedJobSeeker.loggedJobSeeker,
    (state) => state
)

export const { setLoggedJobSeekerDetails, resetLoggedJobSeekerDetails } = loggedJobSeeker.actions;

export default loggedJobSeeker.reducer;
