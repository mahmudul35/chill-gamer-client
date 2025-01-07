import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, signOutUser, dark } = useContext(AuthContext);

  return (
    <div className="navbar bg-white  dark:bg-slate-900 dark:text-white">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 rounded-lg bg-white shadow-lg dark:bg-slate-800"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allreview">All Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/addreview">Add Review</NavLink>
            </li>
            <li>
              <NavLink to="/myreviews">My Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/watchlist">Game WatchList</NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="hidden md:inline text-xl font-bold text-pink-800"
        >
          Chill Gamer
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          {[
            { name: "Home", route: "/" },
            { name: "All Reviews", route: "/allreview" },
            { name: "Add Review", route: "/addreview" },
            { name: "My Reviews", route: "/myreviews" },
            { name: "Game WatchList", route: "/watchlist" },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.route}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-800 font-semibold border-b-2 border-pink-800"
                    : "hover:text-pink-800 transition-colors"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4">
        {user && (
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="h-10 w-10 rounded-full border-2 border-pink-800 my-anchor-element"
          />
        )}
        <Tooltip anchorSelect=".my-anchor-element" place="top" className="z-50">
          {user?.displayName || "User"}
        </Tooltip>
        {user ? (
          <button
            onClick={signOutUser}
            className="btn bg-pink-800 hover:bg-pink-700 text-white"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/auth/login">
              <button className="btn bg-pink-800 hover:bg-pink-700 text-white">
                Login
              </button>
            </NavLink>
            <NavLink to="/auth/register">
              <button className="btn bg-green-500 hover:bg-green-400 text-white">
                Register
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
