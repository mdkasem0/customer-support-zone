import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = (
    <>
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </>
  );

  return (
    <div className="navbar  w-full z-50">
      {/* Logo */}
      <div className="navbar-start w-4/12 md:w-1/4">
        <a className="btn btn-ghost text-xl px-0">SupportSphere</a>
      </div>

      {/* Menu */}
      <div className="navbar-end w-8/12 md:w-3/4 flex justify-end">
        {/* Mobile Hamburger - show only below md */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost p-2"
          >
            {isMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>

        {/* Desktop Menu - show only md and above */}
        <ul className="hidden md:flex menu menu-horizontal px-1 items-center ">
          {navItems}
          <button className="flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 transition-all shadow-md">
            <BiPlus size={18} strokeWidth={2.5} />
            New Ticket
          </button>
        </ul>
        
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-base-100 z-40 flex flex-col items-center justify-center space-y-6 text-lg md:hidden">
          <ul className="flex flex-col items-center space-y-6 text-xl">
            {navItems}
          </ul>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 transition-all shadow-md">
            <BiPlus size={20} strokeWidth={2.5} />
            New Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
