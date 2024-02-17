import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExperiencesDetails } from '../../../redux/slices/JobSeeker/RegisterJobSeekerSlice';
import { toast } from "react-toastify";


export default function Experience() {

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [experience, setExperience] = useState({
        role: "",
        companyName: "",
        industry: "",
        location: "",
        salary: "",
        startDate: "",
        endDate: "",
        status: "None",
    })

    const [experiences, setExperiences] = useState([]);

    const handleStartDate = (e) => {
        if (experience.endDate === "") {
            setExperience(prevState => ({
                ...prevState,
                "status": "Currently Working"
            }))
        }
        else {
            setExperience(prevState => ({
                ...prevState,
                "status": "Completed"
            }))
        }
        handleChange(e);
    }

    const handleEndDate = (e) => {
        if (e.target.value === "") {
            setExperience(prevState => ({
                ...prevState,
                "status": "Currently Working"
            }))
        }
        else {
            setExperience(prevState => ({
                ...prevState,
                "status": "Completed"
            }))
        }
        handleChange(e);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const resetExperience = () => {
        var exp = {
            role: "",
            companyName: "",
            industry: "",
            location: "",
            salary: "",
            startDate: "",
            endDate: "",
            status: "",
        }
        setExperience(exp)
    }

    const saveExperience = (e) => {
        e.preventDefault();
        console.log(experience)
        experiences.push(experience)
        setExperiences([...experiences])
        console.log(experiences)
        dispatch(setExperiencesDetails(experience));
        resetExperience()
        toast.success("Success, File Section Unlocked");
    }

    return (
        <div>
            <div className='container col-md-10'>
                <div className='text-center lead fs-2 py-5 p-md-4'>Experience Details</div>
                <form onSubmit={saveExperience}>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='role'>Role:</label>
                                <input
                                    type='text'
                                    id='role'
                                    name='role'
                                    className='form-control'
                                    pattern='[a-zA-Z ]{3,40}'
                                    // value={experience.role}
                                    value={experience.role}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='companyName'>Company Name:</label>
                                <input
                                    type='text'
                                    id='companyName'
                                    name='companyName'
                                    className=' form-control'
                                    pattern='[a-zA-Z0-9 ]{3,70}'
                                    value={experience.companyName}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className=''></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='industry'>Industry:</label>
                                <input
                                    type='text'
                                    id='industry'
                                    name='industry'
                                    className=' form-control'
                                    pattern='[a-zA-Z ]{2,40}'
                                    value={experience.industry}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='location'>Location:</label>
                                <input
                                    type='text'
                                    id='location'
                                    name='location'
                                    pattern='[a-zA-Z ]{3,40}'
                                    className=' form-control'
                                    value={experience.location}
                                    required
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='salary'>Salary:</label>
                                <input
                                    type='number'
                                    id='salary'
                                    min="1000"
                                    name='salary'
                                    className=' form-control'
                                    value={experience.salary}
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='startDate'>Start Date:</label>
                                <input
                                    type='date'
                                    id='startDate'
                                    name='startDate'
                                    className=' form-control'
                                    value={experience.startDate}
                                    required
                                    onChange={handleStartDate}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='endDate'>End Date:</label>
                                <input
                                    type='date'
                                    id='endDate'
                                    name='endDate'
                                    className=' form-control'
                                    value={experience.endDate}
                                    onChange={handleEndDate}
                                ></input>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <div className='form-group'>
                                <label htmlFor='status'>Status:</label>
                                <input
                                    type='text'
                                    id='status'
                                    name='status'
                                    disabled
                                    className=' form-control'
                                    value={experience.status}
                                    readOnly
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-success my-3' type='submit'>Save</button>
                    </div>
                </form>
                <hr></hr>

                <div className=' my-5'>
                    <div className='text-center mt-3 lead mb-2'>Saved Experiences</div>
                    <div className='col-sm-12 text-center table-responsive'>
                        <table className='table table-striped rounded-4'>
                            <thead>
                                <tr className='bg-white'>
                                    <th scope='col'>No.</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">CompanyName</th>
                                    <th scope="col">Industry</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    experiences.length === 0 ? <tr>
                                        <td colSpan={7}><span className='text-muted'>No Experience Added</span></td>
                                    </tr> :
                                        experiences.map((exp, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{exp.role}</td>
                                                <td>{exp.companyName}</td>
                                                <td>{exp.industry}</td>
                                                <td>{exp.location}</td>
                                                <td>{exp.salary}</td>
                                                <td>{exp.status}</td>
                                            </tr>
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
