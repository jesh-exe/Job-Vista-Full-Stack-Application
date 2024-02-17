import { createSelector, createSlice } from "@reduxjs/toolkit"

const initState = {
    "jobs": [{
        "id": 0,
        "recruiterName": "",
        "companyName": "",
        "companyAddress": "",
        "companyUrl": "",
        "companyLogo": "",
        "jobCategory": "",
        "experience": "",
        "minimumEducation": "",
        "description": "",
        "role": "",
        "responsibility": "",
        "jobCity": "",
        "workHours": "",
        "expectedSalary": "",
        "bond": "",
        "vacancies": "",
        "jobType": "",
        "postedDate": "",
        "applicantCount": ""
    }]
}


const jobs = createSlice({
    name: "AllJobs",
    initialState: initState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = [...action.payload]
        }
    }
})


export const getJobs = createSelector(
    (state) => state.jobs.jobs,
    (state) => state
)

export const { setJobs } = jobs.actions;

export default jobs.reducer;

