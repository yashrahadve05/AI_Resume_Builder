import { useClerk } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const user = { name: "Harshit" }; // Replace with actual user data fetching logic
    const { signOut } = useClerk();

    return (
        <>
            {/* Navbar content */}
            <nav className="z-50 flex items-center justify-between w-full py-6 px-6 md:px-16 lg:px-24 xl:px-40 text-sm shadow-md ">
                <Link to="/" className="flex items-center justify-center">
                    {/* <img src={logo} alt="nav logo" height={50} width={50} /> */}
                    <span className="font-bold text-xl self-stretch leading-[18px] text-black">Resume <br />Craft <span className="text-indigo-600">AI</span></span>
                </Link>


                <div className="flex justify-center items-center gap-3">
                    <div className="max-md:hidden text-md font-medium">Hi, {user?.name}</div>
                    <Link to="/" onClick={() => signOut()} className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" >
                        Logout
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
