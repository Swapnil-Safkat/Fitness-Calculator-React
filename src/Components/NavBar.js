import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinkClass = 'text-md md:text-xl py-1 px-6 my-3 font-semibold text-neutral rounded-lg'
  return (
    <div className='flex justify-around flex-col md:flex-row items-center p-6 bg-accent shadow-md sticky top-0  z-3'>
      <div>
        <NavLink className={navLinkClass} to={'/home'}>Peak Fitness</NavLink>
      </div>
      <div>
        <NavLink className={navLinkClass} to={'/bmi'}>BMI</NavLink>
        <NavLink className={navLinkClass} to={'/bmr'}>BMR</NavLink>
        <NavLink className={navLinkClass} to={'/ideal-weight'}>Ideal Weight</NavLink>
        <NavLink className={navLinkClass} to={'/calorie'}>Calorie</NavLink>
      </div>
    </div>
  );
};

export default NavBar;