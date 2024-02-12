import React from 'react';
import NewJob from './NewJob';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Outlet } from 'react-router-dom';
import '../../css/Dashboard/Sidebar.css';

export default function Sidebar() {
  return (
    <div className='container-fluid ms-0 px-0 sidebar-main'>
      <div className='row'>
        <div className='col-md-2'>
          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              Menu
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/dashboard" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/dashboard/new_job" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table">New Job</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/dashboard/jobs" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table">Job List</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/analytics" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
                </NavLink>

                <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter className='sidebar-footer'>
              <div className='sidebar-footer-inner'>
                Sidebar Footer
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </div>

        <div className='col-md-10'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};