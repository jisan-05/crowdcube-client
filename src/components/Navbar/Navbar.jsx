import { Link, NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
    const { signOutUser, user } = useContext(authContext);

    const handleLogOut = () => {
        signOutUser();
    };
    console.log(user);
    // console.log("Photo URL is ", user?.photoURL)

    // for { links }
    const links = (
        <div className="md:flex md:gap-5">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="/AllCampaign">All Campaign</NavLink>
            </li>
            <li>
                <NavLink to="/AddNewCampaign">Add New Campaign</NavLink>
            </li>
            <li>
                <NavLink to="/MyCampaign">My Campaign</NavLink>
            </li>
            <li>
                <NavLink to="/MyDonation">My Donations</NavLink>
            </li>
        </div>
    );
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
                        >
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        Crowdcube
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center">
                            <img
                                src={user?.photoURL}
                                alt=""
                                className="w-12 h-12 rounded-full"
                            />

                            <button
                                className="btn bg-blue-500 text-white"
                                onClick={handleLogOut}
                            >
                                Log out
                            </button>
                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className="btn bg-blue-500 text-white "
                        >
                            Log in
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
