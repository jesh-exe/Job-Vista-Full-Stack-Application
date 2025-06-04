import axios from "axios";

class JobSeekerService {

    get apiUrl() {
        return window._env_?.API_URL || "http://localhost:8080";
    }
    authenticateJobSeeker(credentials)
    {
        return axios.post( this.apiUrl + "/jobseeker/authenticate", credentials)
    }

    loadUserByJwtToken(jwtToken)
    {
        return axios.get( this.apiUrl + "/jobseeker",{
            headers:{
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    registerJobSeeker(jobseeker)
    {
        return axios.post( this.apiUrl + "/jobseeker", jobseeker);
    }

    uploadJobSeekerFiles(id,data)
    {
        return axios.post( this.apiUrl + "/jobseeker/files/"+id,data);
    }

}

export default new JobSeekerService();