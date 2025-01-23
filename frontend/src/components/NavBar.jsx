import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Logo from "/images/Logo.png";

const NavBar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu open/close state
  const handleMenuToggler = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Array of navigation items with their respective paths and titles
  const navItems = [
    { path: "/", title: "Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary" },
    { path: "/post-job", title: "Post a Job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        {/* Logo and title linking to the home page */}
        <a
          href="/"
          className="flex items-center gap-2 text-2xl text-black font-black"
        >
          <img src={Logo} alt="Logo" />
          <span>Job Portal</span>
        </a>

        {/* ==================== Nav Items for Large Devices ==================== */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-[#080808]">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ==================== Signup and Login Buttons ==================== */}
        <div className="text-base text-[#080808] font-medium space-x-5 hidden lg:block">
          <Link to="/sign-in" className="py-2 px-5 border rounded">
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded bg-[#3575E2] text-[#FAF9F6]"
          >
            Sign up
          </Link>
        </div>

        {/* ==================== Mobile Menu Toggle Button ==================== */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-[#080808]" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-[#080808]" />
            )}
          </button>
        </div>
      </nav>

      {/* ==================== Nav Items for Mobile Devices ==================== */}
      <div
        className={`px-4 bg-[#080808] py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        } md:hidden`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-[#FAF9F6] first:text-[#FAF9F6] py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          {/* Additional login link for mobile view */}
          <li className="text-[#FAF9F6] py-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
