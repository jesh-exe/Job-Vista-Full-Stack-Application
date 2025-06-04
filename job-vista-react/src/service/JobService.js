import axios from "axios";

class JobService {
    get apiUrl() {
        return window._env_?.API_URL || "http://localhost:8080";
    }
    getAllJobs() {
        return axios.get(this.apiUrl + "/jobs");
    }

    applyForJob(id, jwtToken) {
        return axios.get(this.apiUrl + "/job-application/" + id, {
            headers: {
                "Authorization": "Bearer " + jwtToken
            }
        })
    }

}

export default new JobService();