import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import NewJob from './NewJob'

function Dashboard() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-2 col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-sm-10 col-md-10">
                    {/* <Main/> */}
                    <NewJob/>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Dashboard