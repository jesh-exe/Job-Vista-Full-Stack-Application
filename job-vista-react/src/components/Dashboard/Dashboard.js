import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
<<<<<<< HEAD
import NewJob from './NewJob'

=======
import '../../css/Dashboard/Dashboard.css'
import { useSelector } from 'react-redux'
import { getLoggedRecruiter, getLoggedRecruiterJobs } from '../../redux/slices/Recruiter/RecruiterSlice'
import { useNavigate } from 'react-router'
>>>>>>> origin/main
function Dashboard() {

  //To Ensure that the Recruiter can use Dashboard
  const navigate = useNavigate();
  const recruiter = useSelector(getLoggedRecruiter);
  if (recruiter.email === "" ) {
    navigate("/login");
  }

  return (
    <div className="dashboard">
      <Sidebar />
    </div>

  )
}

export default Dashboard