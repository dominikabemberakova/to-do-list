'use client'

import React, {useState} from 'react';
import Header from './Header';
import Board from './Board';
import Navbar from './NavBar';

const Layout = () => {

    const [state, setCurrentPage] = useState("Work")

    const WORK_URL = 'https://66f3291b71c84d8058780204.mockapi.io';
    const PERSONAL_URL = 'https://66f4820977b5e8897099b140.mockapi.io';

   

  return (
    <div>
      <Navbar 
      newCurrentPage={setCurrentPage}
      />
      <Header currentUrl={state == 'Work' ? WORK_URL : PERSONAL_URL}/>
      <Board currentUrl={state == 'Work' ? WORK_URL : PERSONAL_URL}  />
    </div>
  );
};

export default Layout;

