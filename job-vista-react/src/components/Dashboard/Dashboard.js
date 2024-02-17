import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import '../../css/Dashboard/Dashboard.css'
import { useSelector } from 'react-redux'
import { getLoggedRecruiter, getLoggedRecruiterJobs } from '../../redux/slices/Recruiter/RecruiterSlice'
import { useNavigate } from 'react-router'
import { getLoggedJobSeeker } from '../../redux/slices/JobSeeker/JobSeekerSlice'
import { toast } from 'react-toastify'
function Dashboard() {

  //To Ensure that the Recruiter can use Dashboard
  const navigate = useNavigate();
  const recruiter = useSelector(getLoggedRecruiter);
  const jobSeeker = useSelector(getLoggedJobSeeker);
  if(jobSeeker.email !== "")
  {
    toast.warn("You are not Authorized");
    navigate("/");
  }
  // else if (recruiter.email === "" ) {
  //   navigate("/login");
  // }

  return (
    <div className="dashboard">
      <Sidebar />
    </div>

  )
}

export default Dashboard