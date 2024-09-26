"use client";

import React, { useState } from "react";
import Board from "./Board";
import Navbar from "./NavBar";
import "../globals.css";

const Layout = () => {
  const [currentPage, setCurrentPage] = useState("Work");
  const [theme, setTheme] = useState("light");

  const WORK_URL = "https://66f3291b71c84d8058780204.mockapi.io";
  const PERSONAL_URL = "https://66f4820977b5e8897099b140.mockapi.io";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`app-container ${
        theme === "light" ? "light-mode" : "dark-mode"
      }`}
    >
      <Navbar newCurrentPage={setCurrentPage} />

      <header>
        <button onClick={toggleTheme} style={{ margin: "10px" }}>
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </header>
      <Board currentUrl={currentPage === "Work" ? WORK_URL : PERSONAL_URL} />
    </div>
  );
};

export default Layout;
