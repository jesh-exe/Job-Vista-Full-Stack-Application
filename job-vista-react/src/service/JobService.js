import axios from "axios";

class JobService {

    getAllJobs(){
        return axios.get("http://localhost:8080/jobs");
    }

    applyForJob(id, jwtToken)
    {
        return axios.get("http://localhost:8080/job-application/"+id,{
            headers : {
                "Authorization": "Bearer " + jwtToken
            }
        })
    }

}

export default new JobService();