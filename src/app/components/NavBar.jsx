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

      <div onClick={handleNav} className="md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {nav && (
        <div className="fixed top-0 left-0 w-full h-full bg-inherit z-10">
          <ul className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 text-2xl hover:bg-[#00df9a] rounded-xl duration-300 hover:text-black cursor-pointer"
                onClick={() => {
                  newCurrentPage(item.text);
                  setNav(false);
                }}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
