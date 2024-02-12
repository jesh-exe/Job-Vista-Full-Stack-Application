import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import NewJob from './NewJob'
import '../../css/Dashboard/Dashboard.css'
import { Outlet } from 'react-router'
function Dashboard() {
  return (
    <div>
        {/* <div className="container dashboard"> */}

                    <Sidebar/>

        {/* </div> */}
        
    </div>
  )
}

export default Dashboard