import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Import Axios for API requests


const TaskCard = () => {

  const [tasks, setTasks] = useState<[]>([]); 

 
  const fetchTasks = async () => {
    try {
      
      const response = await axios.get('https://66f3291b71c84d8058780204.mockapi.io/tasks');
      console.log("Fetched tasks:", response.data); 
      setTasks(response.data); 
    } catch (error) {
      console.error('Error fetching tasks:', error);  
    }
  };

  useEffect(() => {
    fetchTasks();  
  }, []);  

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Total tasks: {tasks.length}</p>
      <div>
        <h2>Task Column</h2>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
