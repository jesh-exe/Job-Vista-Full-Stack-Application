import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Experience from './Experience';
import Address from './Address';
import Education from './Education';
import Personal from './Personal';
import { useSelector } from 'react-redux';
import { getAddress, getExperience, getGraduationEducation, getHscEducation, getPersonal, getSscEducation } from '../../../redux/slices/RegisterJobSeekerSlice';

function RegisterJobSeeker() {

    const personal = useSelector(getPersonal);
    const address = useSelector(getAddress);
    const ssc = useSelector(getSscEducation);
    const hsc = useSelector(getHscEducation);
    const graduation = useSelector(getGraduationEducation);
    const experiences = useSelector(getExperience);
    const [currentTab, setCurrentTab] = useState("personal");

    return (
        <div className='p-2 p-sm-5 p-md-5'>
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

                <Tab eventKey="other" title="Other">

                </Tab>

            </Tabs >
        </div >
    );
}

export default RegisterJobSeeker;