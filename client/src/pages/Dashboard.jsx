import { SignOutButton } from "@clerk/clerk-react";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="bg-slate-300 min-h-screen">
                
            </div>


            <Outlet />
        </>
    )
};

export default Dashboard;
