import axios from "axios";

class JobSeekerService {

    authenticateJobSeeker(credentials)
    {
        return axios.post("http://localhost:8080/jobseeker/authenticate", credentials)
    }

    loadUserByJwtToken(jwtToken)
    {
        return axios.get("http://localhost:8080/jobseeker",{
            headers:{
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    registerJobSeeker(jobseeker)
    {
        return axios.post("http://localhost:8080/jobseeker", jobseeker);
    }

    uploadJobSeekerFiles(id,data)
    {
        return axios.post("http://localhost:8080/jobseeker/files/"+id,data);
    }

}

export default new JobSeekerService();