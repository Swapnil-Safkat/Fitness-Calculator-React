import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinkClass = 'text-md md:text-lg py-1 px-6 my-3 font-semibold text-gray-600 rounded-lg'
  return (
    <div className="navbar flex justify-between flex-row items-center bg-primary shadow-md sticky top-0 z-50 px-4 md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink className={navLinkClass} to={'/bmi'}>BMI</NavLink>
            <NavLink className={navLinkClass} to={'/bmr'}>BMR</NavLink>
            <NavLink className={navLinkClass} to={'/ideal-weight'}>Ideal Weight</NavLink>
            <NavLink className={navLinkClass} to={'/calorie'}>Calorie</NavLink>
          </ul>
        </div>
        <a href='/' className="btn btn-ghost normal-case text-xl">Peak Fitness</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <NavLink className={navLinkClass} to={'/bmi'}>BMI</NavLink>
          <NavLink className={navLinkClass} to={'/bmr'}>BMR</NavLink>
          <NavLink className={navLinkClass} to={'/ideal-weight'}>Ideal Weight</NavLink>
          <NavLink className={navLinkClass} to={'/calorie'}>Calorie</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;