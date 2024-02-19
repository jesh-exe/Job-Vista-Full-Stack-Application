import React, { useEffect } from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink, Outlet } from 'react-router-dom';
import '../../css/Dashboard/Sidebar.css';

export default function Sidebar() {
  return (
    <div className='container-fluid ms-0 px-0 '>
      <div className='row holder'>
        <div className='col-1 '>
          <CDBSidebar textColor="#fff" backgroundColor="#333" toggled minWidth='52px' className='sidebar-main' >
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              Menu
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/dashboard" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/dashboard/new_job" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="plus">New Job</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/dashboard/jobs" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="book">Job List</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/dashboard" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
        <div className='offset-1 col-10 offset-md-0 col-md-11 offset-lg-0 col-lg-10 p-0'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};