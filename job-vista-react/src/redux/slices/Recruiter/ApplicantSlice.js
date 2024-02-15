import { createSelector, createSlice } from "@reduxjs/toolkit";


const initState = {
    applicant: {
        "jobId" : 0,
        "city": "",
        "contactNumber": "",
        "email": "",

        "experiences": [{
            "companyName": "",
            "endDate": "",
            "industry": "",
            "location": "",
            "role": "",
            "salary": 0,
            "startDate": "",
            "status": ""
        }],

        "gender": "",
        "githubRepositoryLink": "",
        "name": "",
        "profilePhoto": "",
        "skills": "",
        "status": "",
    }
}


const applicant = createSlice({
    name: "Applicant",
    initialState: initState,
    reducers: {
        setApplicant: (state, action) => {
            state.applicant = action.payload;
        }
    }
})


export const getApplicantData = createSelector(
    (state) => state.applicant.applicant,
    (state) => state
)

export const { setApplicant } = applicant.actions;

export default applicant.reducer;


