import { createSelector, createSlice } from "@reduxjs/toolkit"

const initState = {
    personal: {
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        email: "jayesh",
        password: "",
        contactNumber: "",
        gender: "",
        portfolioLink: "",
        skills: "",
        gitRepositoryLink: ""
    },

    address: {
        lane1: "",
        lane2: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
    },

    education: {
        ssc: {
            schoolName: '',
            boardName: '',
            passingYear: '',
            percentage: ''
        },
        hsc: {
            schoolName: '',
            boardName: '',
            stream: '',
            passingYear: '',
            percentage: ''
        },
        graduation: {
            collegeName: '',
            universityName: '',
            specialization: '',
            duration: '',
            addmissionYear: '',
            passingYear: '',
            percentage: '',
            backlogs: '',
            attempts: '',
            status: ""
        }
    },

    experiences: []
}

const jobSeeker = createSlice({
    name: "JobSeekerDetails",
    initialState: initState,
    reducers: {
        setPersonalDetails: (state, action) => {
            state.personal = action.payload
        },
        setAddressDetails: (state, action) => {
            state.address = action.payload
        },
        setSscEducationDetails: (state, action) => {
            state.education.ssc = action.payload
        },
        setHscEducationDetails: (state, action) => {
            state.education.hsc = action.payload
        },
        setGraduationEducationDetails: (state, action) => {
            state.education.graduation = action.payload
        },
        setExperiencesDetails: (state, action) => {
            state.experiences.push(action.payload);
        }
    }
})

export const getPersonal = createSelector(
    (state) => state.jobSeeker.personal,
    (state) => state
)
export const getAddress = createSelector(
    (state) => state.jobSeeker.address,
    (state) => state
)
export const getSscEducation = createSelector(
    (state) => state.jobSeeker.education.ssc,
    (state) => state
)
export const getHscEducation = createSelector(
    (state) => state.jobSeeker.education.hsc,
    (state) => state
)
export const getGraduationEducation = createSelector(
    (state) => state.jobSeeker.education.graduation,
    (state) => state
)
export const getExperience = createSelector(
    (state) => state.jobSeeker.experiences,
    (state) => state
)

export const {
    setPersonalDetails,
    setAddressDetails,
    setSscEducationDetails,
    setHscEducationDetails,
    setGraduationEducationDetails,
    setExperiencesDetails
} = jobSeeker.actions;

export default jobSeeker.reducer
