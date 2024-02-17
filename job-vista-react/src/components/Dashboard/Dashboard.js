import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import '../../css/Dashboard/Dashboard.css'
import { useSelector } from 'react-redux'
import { getLoggedRecruiter, getLoggedRecruiterJobs } from '../../redux/slices/Recruiter/RecruiterSlice'
import { useNavigate } from 'react-router'
<<<<<<< HEAD
=======
import { getLoggedJobSeeker } from '../../redux/slices/JobSeeker/JobSeekerSlice'
import { toast } from 'react-toastify'
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759
function Dashboard() {

  //To Ensure that the Recruiter can use Dashboard
  const navigate = useNavigate();
  const recruiter = useSelector(getLoggedRecruiter);
<<<<<<< HEAD
  if (recruiter.email === "" ) {
    navigate("/login");
  }
=======
  const jobSeeker = useSelector(getLoggedJobSeeker);
  if(jobSeeker.email !== "")
  {
    toast.warn("You are not Authorized");
    navigate("/");
  }
  // else if (recruiter.email === "" ) {
  //   navigate("/login");
  // }
>>>>>>> b6a88b25a912e0f6e5cd6921eb79d64173063759

  return (
    <div className="dashboard">
      <Sidebar />
    </div>

  )
}

export default Dashboard