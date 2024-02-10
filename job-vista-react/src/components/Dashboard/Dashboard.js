import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import NewJob from './NewJob'
import '../../css/Dashboard/Dashboard.css'
function Dashboard() {
  return (
    <div>
        <div className="container dashboard">
            <div className="row">
                <div className="col-sm-2 col-lg-2 col-md-4">
                    <Sidebar/>
                </div>
                <div className="col-sm-10 col-lg-10 col-md-8 mid">
                    <Main/>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Dashboard