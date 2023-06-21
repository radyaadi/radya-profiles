import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/ThemeContext';
import { NAV_LIST } from './nav-list';

const Navigation = ({ initScroll }) => {
  const [nav, setNav] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`${
        initScroll >= 40
          ? 'h-[3.5rem] border-b border-[--border-color] bg-[--container-color]'
          : 'h-[5rem]'
      } flex items-center justify-between duration-300`}
    >
      <Link
        to={`/`}
        title="logo"
        className="inline-flex items-center text-[--main-color]"
      >
        <span className="">
          <i className="bx bxs-category rotate-45"></i>
        </span>
        <h2 className="ml-1">RadyaAdi</h2>
      </Link>
      <div
        className={`${
          nav
            ? 'translate-y-[14.5rem] min-[250px]:translate-y-[10.5rem] min-[350px]:translate-y-[6rem] min-[600px]:translate-y-[0]'
            : 'translate-y-[0]'
        } fixed bottom-0 left-0 top-[initial] flex w-full flex-col items-center rounded-t-2xl bg-[--container-color] text-center duration-300 ease-in-out min-[600px]:static min-[600px]:bg-transparent min-[600px]:duration-0 min-[900px]:w-[50%]`}
      >
        <div
          className="w-full cursor-pointer rounded-t-2xl shadow-[0_-1px_5px_#00000030] duration-300 ease-in-out hover:bg-[--main-hover-color] hover:text-[--white] min-[600px]:hidden"
          onClick={() => setNav(!nav)}
        >
          <i
            className={`py-1 text-[1.5rem] ${
              nav ? 'bx bx-chevron-up' : 'bx bx-chevron-down'
            }`}
          ></i>
        </div>
        <ul className="grid w-[70%] grid-cols-[repeat(1,_5rem)] justify-evenly gap-[1.2rem_1rem] px-5 py-7 font-normal min-[250px]:grid-cols-[repeat(2,_5rem)] min-[350px]:grid-cols-[repeat(3,_5rem)] min-[380px]:w-[80%] min-[600px]:flex min-[600px]:w-full min-[600px]:gap-1">
          {NAV_LIST.map((nav, index) => {
            return (
              <NavLink key={index} to={nav.path}>
                {({ isActive }) => {
                  return (
                    <div
                      className={`${
                        isActive ? 'nav__active' : ''
                      } underline__hover relative duration-300 ease-in-out hover:text-[--main-color]`}
                    >
                      <i
                        className={`block text-[1.1rem] min-[600px]:hidden ${nav.icon}`}
                      ></i>
                      <span className="text-[.9rem] font-medium">
                        {nav.name}
                      </span>
                    </div>
                  );
                }}
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div
        onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
        className="cursor-pointer text-[1.5rem] text-[--main-color]"
      >
        <i className="bx bxs-sun"></i>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  initScroll: PropTypes.number.isRequired,
};

export default Navigation;
