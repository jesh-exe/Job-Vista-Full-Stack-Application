import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getJobs } from '../redux/slices/JobsSlice';
import { useNavigate } from 'react-router';
import ScrollReveal from 'scrollreveal';

export default function AllJobs() {
    const navigate = useNavigate();
    const jobs = useSelector(getJobs);

    const [loader, setLoader] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBy, setFilterBy] = useState('Company');
    const [jobTypeFilter, setJobTypeFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLoader(true);
        }, 1500);
        ScrollReveal().reveal('.top', {
            origin: 'top',
            duration: 1500,
            distance: '200px',
        });
        ScrollReveal().reveal('.left', {
            origin: 'left',
            duration: 1500,
            distance: '200px',
        });
        ScrollReveal().reveal('.emerge', {
            scale: 0.7,
            duration: 1500,
        });
    }, []);

    const showJobCard = (id) => {
        console.log(id)
        navigate('/jobs/' + id);
    };

    // Filter jobs based on search term and selected filters
    const filteredJobs = jobs.filter((job) => {
        return (
            job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterBy === 'Company' || job.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (jobTypeFilter === '' || job.jobType === jobTypeFilter) &&
            (categoryFilter === '' || job.jobCategory === categoryFilter)
        );
    });

    return (
        <div>
            {loader ?

                jobs.id === 0 ? <div className="text-center fs-2 text-muted">No Jobs Found</div> :

                    (
                        <div className="container pt-5 pb-5" style={{ minHeight: '90vh' }}>
                            <div className="row">
                                <div className="display-6 text-center mb-4 text-primary mt-2 top">All Jobs</div>

                                <div className='offset-md-8 col-md-4'>
                                    <div className="input-group bg-body top">
                                        <input
                                            type="text"
                                            placeholder="Search Jobs"
                                            className="form-control rounded-3 me-2"
                                            aria-label="Text input with dropdown button"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <div className="input-group-append">
                                            <select className="form-select" onChange={(e) => setFilterBy(e.target.value)}>
                                                <option>Company</option>
                                                <option>Role</option>
                                                <option>Salary</option>
                                                <option>Recruiter</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Filter options */}
                                <div className="col-12 col-sm-3 bg-white border rounded-3 col-md-3 mt-4 left" style={{ height: '300px' }}>
                                    <div className="my-4 p-3 text-muted">
                                        <div className="lead text-center">Filter Jobs</div>
                                        <div className="text-center">
                                            <select className="mt-4 form-select" onChange={(e) => setJobTypeFilter(e.target.value)}>
                                                <option value="">Job Type</option>
                                                <option value="Full Time">Full Time</option>
                                                <option value="Part Time">Part Time</option>
                                                <option value="Internship">Internship</option>
                                            </select>
                                            <select className="mt-4 form-select" onChange={(e) => setCategoryFilter(e.target.value)}>
                                                <option value="">Category</option>
                                                <option value="Java">Java</option>
                                                <option value="React">React</option>
                                                <option value="Frontend">Frontend</option>
                                                <option value="Backend">Backend</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-9 col-md-9 mt-4">
                                    {filteredJobs.map((job, index) => (
                                        <div role="button" className="card mb-4 shadow p-2 text-center text-sm-start emerge" key={index} onClick={() => showJobCard(job.id)}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img src={`data:image/jpeg;base64,${job.companyLogo}`} className="p-5 img-fluid rounded-circle" width={250} alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <div className="fs-4 text-muted">{job.companyName}</div>
                                                        <div className="text-muted small">- Posted By : {job.recruiterName}</div>
                                                        <div className="mt-3">
                                                            <span className="text-muted">Role: </span> {job.role}
                                                        </div>
                                                        <div><span className='text-muted'>Category</span> : {job.jobCategory}</div>
                                                        <div><span className='text-muted'>Type</span> : {job.jobType}</div>
                                                        <div><span className='text-muted'>Salary</span> : {job.expectedSalary} /-</div>
                                                        <div>
                                                            Description :
                                                            <div className="text-muted">{job.description}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
                        <div className="blob "></div>
                    </div>
                )}
        </div>
    );
}
