import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Experience from './Experience';
import Address from './Address';
import Education from './Education';
import Personal from './Personal';
import { useSelector } from 'react-redux';
import { getAddress, getExperience, getGraduationEducation, getHscEducation, getPersonal, getSscEducation } from '../../../redux/slices/JobSeeker/RegisterJobSeekerSlice';
import Other from './Other';
import axios from 'axios';
import JobSeekerService from '../../../service/JobSeekerService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

function RegisterJobSeeker() {

    const navigate = useNavigate();

    const personal = useSelector(getPersonal);
    const address = useSelector(getAddress);
    const ssc = useSelector(getSscEducation);
    const hsc = useSelector(getHscEducation);
    const graduation = useSelector(getGraduationEducation);
    const experiences = useSelector(getExperience);
    const [profilePicture, setProfilePicture] = useState(null);
    const [resume, setResume] = useState(null);
    const [currentTab, setCurrentTab] = useState("personal");

    const handleFiles = (files) => {
        setProfilePicture(files.profilePicture)
        setResume(files.resume);
    }

    const sendDataToAPI = () => {

        var apiRequestData = {
            "personal": personal,
            "address": address,
            "education": {
                "ssc": ssc,
                "hsc": hsc,
                "graduation": graduation
            },
            "experiences": experiences
        }

        console.log(apiRequestData)

        const formData = new FormData();
        formData.append("image", profilePicture);
        formData.append("resume", resume);

        JobSeekerService.registerJobSeeker(apiRequestData)
            .then((response) => {
                var registeredJobSeekerID = response.data;
                JobSeekerService.uploadJobSeekerFiles(registeredJobSeekerID, formData)
                    .then((response) => {
                        toast.success("Registration Successful");
                        navigate("/login");
                    }).catch((error) => {
                        console.log(error);
                        toast.error("Files were not uploaded");
                    })
            }).catch((error) => {
                console.log(error.data)
                toast.error("Registration Failed");
            })
    }

    return (
        <div className='p-2 p-sm-5 mt-2 p-md-5'>
            <Tabs
                defaultActiveKey={currentTab}
                id="justify-tab-example"
                className="mb-3"
                justify
                activeKey={currentTab}
                onSelect={(e) => setCurrentTab(e)}
            >
                <Tab eventKey="personal" title="Personal">
                    <Personal></Personal>
                </Tab>

                <Tab eventKey="address" title="Address" disabled={personal.username === "" ? true : false}>
                    <Address></Address>
                </Tab>

                <Tab eventKey="education" title="Education" disabled={address.city === "" ? true : false}>
                    <Education></Education>
                </Tab>

                <Tab eventKey="experience" title="Experience" disabled={graduation.collegeName === "" ? true : false}>
                    <Experience></Experience>
                </Tab>

                <Tab eventKey="other" title="Upload" disabled={experiences.length === 0 ? true : false}
                >
                    <Other handleFiles={handleFiles} ></Other>
                </Tab>

                <Tab eventKey="final" title="Confirm" disabled={resume === null ? true : false}>
                    <div>
                        <div className='container col-md-10'>
                            <div className='text-center lead fs-2 py-5 p-md-5'>Confirmation</div>
                            <div className='text-center my-3'>
                                <div className='lead my-3'>Sure you want to proceed?</div>
                                <button className='btn btn-primary' onClick={sendDataToAPI}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </Tab>

            </Tabs >
        </div >
    );
}

export default RegisterJobSeeker;