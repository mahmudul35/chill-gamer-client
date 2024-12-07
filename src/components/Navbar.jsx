import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../context/AuthProvider";
const Navbar = () => {
  const { user, signOutUser, dark } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 dark:bg-slate-900">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to="/brand">Brands</NavLink>
            <NavLink to="/profile">My Profile</NavLink>
            <NavLink to="/devloper">About Developer</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Chill Gamer</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-7">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to="/allreview">All Reviews</NavLink>
          <NavLink to="/addreview">Add Review</NavLink>
          <NavLink to="/myreviews">My Reviews</NavLink>
          <NavLink to="/watchlist">Game WatchList </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <img
            src={user?.photoURL}
            alt=""
            className="h-10 w-10 rounded-full mr-4 my-anchor-element"
          />
        )}
        <Tooltip anchorSelect=".my-anchor-element" place="top" className="z-50">
          {user?.displayName}
        </Tooltip>
        {user ? (
          <button onClick={signOutUser} class="btn  bg-green-500 text-white">
            Logout
          </button>
        ) : (
          <NavLink to="/auth/login">
            <button class="btn  bg-green-500 text-white">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
