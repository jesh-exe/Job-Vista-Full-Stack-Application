import { createSlice, createSelector } from "@reduxjs/toolkit";
import RecruiterService from "../../../service/RecruiterService";

// const job = {
// 	"id": 0,
// 	"recruiterName": "",
// 	"jobCategory": "",
// 	"experience": "",
// 	"minimumEducation": "",
// 	"description": "",
// 	"role": "",
// 	"responsibility": "",
// 	"jobCity": "",
// 	"workHours": 0,
// 	"expectedSalary": "",
// 	"bond": "",
// 	"vacancies": 0,
// 	"jobType": "",
//  "postedDate": "",
// 	"applicantCount" : "",
// }

const initState = {
	"recruiter": {
		"firstName": "",
		"username": "",
		"email": "",
		"companyName": "",
		"companyUrl": "",
		"companyDescription" : "",
		"companyAddress" : "",
		"companyContact" : "",
		"jobs": [],
		"totalApplicants": 0,
		"activeJobs": 0,
		"companyLogoBase64" : "",
		"totalHired" : 0,
	}
}


const loggedRecruiter = createSlice({
	name: "LoggedRecruiter",
	initialState: initState,
	reducers: {
		setRecruiterDetails: (state, action) => {
			state.recruiter = action.payload;
		},
		resetRecruiterDetails: (state, action) => { 
			state.recruiter = initState.recruiter;
		},
		setRecruiterJobs: (state, action) => {
			state.recruiter.jobs.push(action.payload);
		}

	}
})

export const getLoggedRecruiter = createSelector(
	(state) => state.loggedRecruiter.recruiter,
	(state) => state
)

export const getLoggedRecruiterJobs = createSelector(
	(state) => state.loggedRecruiter.recruiter.jobs,
	(state) => state
)

export const { setRecruiterDetails,resetRecruiterDetails,setRecruiterJobs } = loggedRecruiter.actions;

export default loggedRecruiter.reducer;

