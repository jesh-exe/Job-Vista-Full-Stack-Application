import axios from "axios"
import { useDispatch } from "react-redux"
import { setRecruiterDetails } from "../redux/slices/Recruiter/RecruiterSlice";

class RecruiterService {

    //To get JWT Token from Backend
    authenticateRecruiter(recruiter) {
        return axios.post("http://localhost:8080/recruiter/authenticate", recruiter)
    }

    //Get Recruiter Details from Backend using JWT Token
    loadUserByJwtToken(jwtToken) {
        return axios.get("http://localhost:8080/recruiter", {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    //Post a Job, by Recruiter JWT Token
    createNewJob(job, jwtToken) {
        return axios.post("http://localhost:8080/jobs/job", job, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    //To Get Applicants Datas for particular Job id
    getApplicantsOfJob(id, jwtToken) {
        return axios.get("http://localhost:8080/jobs/applicants/" + id, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    getResumeOfApplicant(email, jwtToken) {
        return axios.get('http://localhost:8080/jobseeker/resume/' + email, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    hireApplicant(jobApplicationId, jwtToken) {
        return axios.get('http://localhost:8080/job-application/hire/'+jobApplicationId, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    updateApplicationStatus(jobApplicationId, status, jwtToken) {
        return axios.get('http://localhost:8080/job-application/update/'+status+"/"+jobApplicationId, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    //Register new Recruiter
    registerRecruiter(recruiter, formdata) {
        return axios.post("http://localhost:8080/recruiter", recruiter)

    }

    //Upload Company Logo
    uploadCompanyLogo(registeredRecruiterID, formdata) {
        return axios.post(`http://localhost:8080/recruiter/image/${registeredRecruiterID}`, formdata)
    }

    //Delete a Job by ID with valid JWT Token
    deleteJob(id, jwtToken) {
        return axios.delete("http://localhost:8080/jobs/job/" + id, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }
}

export default new RecruiterService();