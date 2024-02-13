import { createSlice,createSelector } from "@reduxjs/toolkit";
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
// }
const initState = {
	"recruiter": {
		"firstName": "",
		"username": "",
		"email": "",
		"companyName": "",
		"companyUrl": "",
		"jobs": [],
		"totalApplicants": 0,
		"activeJobs": 0
	}
}



const loggedRecruiter = createSlice({
	name: "LoggedRecruiter",
	initialState: initState,
	reducers: {
		setRecruiterDetails: (state, action) => {
			state.recruiter = action.payload;
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

export const { setRecruiterDetails } = loggedRecruiter.actions;

export default loggedRecruiter.reducer;

