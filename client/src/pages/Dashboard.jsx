import { SignOutButton } from "@clerk/clerk-react";
import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="w-full h-full bg-slate-400">
                <div>
                    Dashboard Page
                </div>
                <SignOutButton redirectUrl="/">
                    <button className="btn btn-primary">Sign Out</button>
                </SignOutButton>
            </div>


            <Outlet />
        </>
    )
};

export default Dashboard;
