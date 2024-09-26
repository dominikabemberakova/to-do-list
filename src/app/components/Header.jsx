'use client'

import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';

const Header = ({currentUrl}) => {
  const [taskCount, setTaskCount] = useState(0);


  useEffect(() => {
    fetchTaskCount();
  }, [currentUrl]);

  const fetchTaskCount = async () => {
    try {
      const response = await getTasks(currentUrl);
      setTaskCount(response.data.length);  
    } catch (error) {
      console.error('Error fetching task count:', error);
    }
  };

  return (
    <header>
      <h1>Task Manager</h1>
      <p>Total tasks: {taskCount}</p>
    </header>
  );
};

export default Header;
