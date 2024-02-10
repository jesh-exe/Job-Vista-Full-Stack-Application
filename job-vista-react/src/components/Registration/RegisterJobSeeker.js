import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function RegisterJobSeeker() {
    const [currentTab, setCurrentTab] = useState("personal")

    const[personal,setPersonal] = useState({

    })

    const[sscEducation,setSscEducation] = useState({

    })

    const[hscEducation,setHscEducation] = useState({
        
    })

    const[graduationEducation,setGraduationEducation] = useState({
        
    })


    return (
        <div className='m-5'>
            <Tabs
                defaultActiveKey={currentTab}
                id="justify-tab-example"
                className="mb-3"
                justify
                activeKey={currentTab}
                onSelect={(e)=>setCurrentTab(e)}
            >
                <Tab eventKey="personal" title="Personal Details">
                    <input type='text'></input>
                    <button onClick={() => setCurrentTab("address")}>Next</button>
                </Tab>

                <Tab eventKey="address" title="Address">
                    <input type='text'></input>

                    <button onClick={() => setCurrentTab("personal")}>Prev</button>
                    <button onClick={() => setCurrentTab("experience")}>Next</button>
                </Tab>

                <Tab eventKey="education" title="Education">
                    <input type='text'></input>
                    <button onClick={() => setCurrentTab("address")}>Prev</button>
                    <button onClick={() => setCurrentTab("experience")}>Next</button>
                </Tab>

                <Tab eventKey="experience" title="Experience">
                    <input type='text'></input>
                    <button onClick={() => setCurrentTab("education")}>Prev</button>
                </Tab>

                <Tab eventKey="other" title="Other Details">
                    <input type='text'></input>
                    <button onClick={() => setCurrentTab("education")}>Prev</button>
                </Tab>

            </Tabs>
        </div>
    );
}

export default RegisterJobSeeker;

