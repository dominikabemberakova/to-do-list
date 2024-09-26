import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ newCurrentPage }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Work" },
    { id: 2, text: "Personal" },
  ];

  return (
    <div className="flex justify-between items-center h-24 px-4">
      <h1 className="text-3xl font-bold text-[#5f33a0]">TO DO LIST</h1>

      {/* Menu pre desktop */}
      <div className="hidden md:flex">
        <ul className="flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:bg-[#dbcdf0] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              onClick={() => newCurrentPage(item.text)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Ikona pre mobilné zariadenia */}
      <div
        onClick={handleNav}
        className="md:hidden z-20 relative right-0 top-0"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobilné menu */}
      <div
        className={`${
          nav ? "fixed" : "hidden"
        } top-0 right-0 w-[60%] h-full bg-white shadow-lg z-10 md:hidden`}
      >
        <ul className="flex flex-col items-start p-4">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 text-xl hover:bg-[#00df9a] rounded-xl duration-300 hover:text-black cursor-pointer w-full"
              onClick={() => {
                newCurrentPage(item.text);
                setNav(false); // Zatvorí menu po kliknutí
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
