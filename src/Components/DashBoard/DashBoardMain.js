import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoardMain = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboardSideBar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            {/* <!-- Page content here --> */}
                <h1 className="text-3xl font-bold">This is Dashboard!</h1>
                <Outlet/>
            </div> 
            <div className="drawer-side">
                <label for="dashboardSideBar" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li><Link to="/dashboard">My Appointments</Link></li>
                <li><Link to="/dashboard/myReview">My Reviews!</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoardMain;