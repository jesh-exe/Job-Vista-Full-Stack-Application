import { useState } from 'react';
import $ from "jquery";


export default function ExperienceExperimental() {


    const [experience, setExperience] = useState({
        role: "",
        companyName: "",
        industry: "",
        location: "",
        salary: "",
        startDate: "",
        endDate: "",
        status: "",
    })

    const [experienceCount, setExperienceCount] = useState(2);

    const handleExperience = () => {
        var header = `<div class="accordion" id="experienceAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="h${experienceCount}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#c${experienceCount}" aria-expanded="true" aria-controls="c${experienceCount}">
                    Experience ${experienceCount}
                </button>
            </h2>
            <div id="c${experienceCount}" class="accordion-collapse collapse" aria-labelledby="h${experienceCount}" data-bs-parent="#experienceAccordion">
                <div class="accordion-body experienceHTML">`;
        var experienceData = $("section").html();
        var footer = `</div></div>`;
        $("#experienceAccordion").append(header + experienceData + footer);
        setExperienceCount(experienceCount + 1);
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const saveExperience = (e) => {
        e.preventDefault();
        console.log(experience)
    }

    return (
        <div className='container'>
            <div className='text-center lead fs-2 py-5 p-md-4'>Experience Details</div>
            <div className="accordion" id="experienceAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="h1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#c1" aria-expanded="true" aria-controls="c1">
                            Experience 1
                        </button>
                    </h2>
                    <div id="c1" className="accordion-collapse collapse show" aria-labelledby="h1" data-bs-parent="#experienceAccordion">
                        <div className="accordion-body experienceHTML">
                            <section>
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
                                                    className='form-control'
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
                                                    className='form-control'
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
                                                    className='form-control'
                                                    required
                                                    onChange={handleChange}
                                                ></input>
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-4'>
                                            <div className='form-group'>
                                                <label htmlFor='salary'>Salary:</label>
                                                <input
                                                    type='text'
                                                    id='salary'
                                                    name='salary'
                                                    className='form-control'
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
                                                    className='form-control'
                                                    required
                                                    onChange={handleChange}
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
                                                    className='form-control'
                                                    onChange={handleChange}
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
                                                    className='form-control'
                                                    readOnly
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button className='btn btn-primary' type='submit'>Save</button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>

            </div>

            <div className='text-center mt-5'>
                <button className='btn btn-outline-secondary' onClick={handleExperience}>Add New Experience</button>
            </div>

        </div>
    )
}
