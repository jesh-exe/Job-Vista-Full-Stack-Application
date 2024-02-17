import axios from "axios"
import { useDispatch } from "react-redux"
import { setRecruiterDetails } from "../redux/slices/Recruiter/RecruiterSlice";

class RecruiterService {

    authenticateRecruiter(recruiter) {
        return axios.post("http://localhost:8080/recruiter/authenticate", recruiter)
    }

    loadUserByJwtToken(jwtToken) {
        return axios.get("http://localhost:8080/recruiter", {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    createNewJob(job,jwtToken)
    {
        return axios.post("http://localhost:8080/jobs/job", job ,{
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    registerRecruiter(recruiter, formdata) {
        axios.post("http://localhost:8080/recruiter", recruiter)
            .then((response) => {
                //Storing the Recruiter ID created in a var, to send it to backend for persisting the Logo
                var registeredRecruiterID = response.data;

                //  Sending the data with Image to backend
                axios.post(`http://localhost:8080/recruiter/image/${registeredRecruiterID}`, formdata)
                    .then((response) => {
                        // If Success, then Show the message and Navigate User to the Homepage for Login
                        return true;
                    }).catch((error) => {
                        //Else Show that Image was not uploaded on the server
                        alert("Failed To Upload the Image");
                        return false;
                    })
            })
            .catch((error) => {
                //If Error in First Axios Call, then check the error message whether Backend is listening or not.
                console.log(error)
                if (error.message === "Network Error") {
                    alert("Server Not Started/Failed")
                    return false;
                }
                //Second Case to check if the Status code is 400 (BAD_REQUEST) comming from Backend which shows Constraint Violation in this case.
                if (error.response.status === 400)
                    //Fetching the Message from the Response Body and Showing to the User via Alert
                    alert(error.response.data.message);
                return false;
            })
        return false;
    }

}

export default new RecruiterService();