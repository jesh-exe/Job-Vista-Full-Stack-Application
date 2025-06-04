import axios from "axios"
import { useDispatch } from "react-redux"
import { setRecruiterDetails } from "../redux/slices/Recruiter/RecruiterSlice";

class RecruiterService {
    get apiUrl() {
        return window._env_?.API_URL || "http://localhost:8080";
    }
    //To get JWT Token from Backend
    authenticateRecruiter(recruiter) {
        return axios.post(this.apiUrl + "/recruiter/authenticate", recruiter)
    }

    //Get Recruiter Details from Backend using JWT Token
    loadUserByJwtToken(jwtToken) {
        return axios.get(this.apiUrl + "/recruiter", {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    //Post a Job, by Recruiter JWT Token
    createNewJob(job, jwtToken) {
        return axios.post(this.apiUrl + "/jobs/job", job, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    //To Get Applicants Datas for particular Job id
    getApplicantsOfJob(id, jwtToken) {
        return axios.get(this.apiUrl + "/jobs/applicants/" + id, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    getResumeOfApplicant(email, jwtToken) {
        return axios.get(this.apiUrl + '/jobseeker/resume/' + email, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    hireApplicant(jobApplicationId, jwtToken) {
        return axios.get(this.apiUrl + '/job-application/hire/' + jobApplicationId, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    updateApplicationStatus(jobApplicationId, status, jwtToken) {
        return axios.get(this.apiUrl + '/job-application/update/' + status + "/" + jobApplicationId, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    //Register new Recruiter
    registerRecruiter(recruiter, formdata) {
        return axios.post(this.apiUrl + "/recruiter", recruiter)

    }

    //Upload Company Logo
    uploadCompanyLogo(registeredRecruiterID, formdata) {
        return axios.post(this.apiUrl + `/recruiter/image/${registeredRecruiterID}`, formdata)
    }

    //Delete a Job by ID with valid JWT Token
    deleteJob(id, jwtToken) {
        return axios.delete(this.apiUrl + "/jobs/job/" + id, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }
}

export default new RecruiterService();