import axios from 'axios';

// Fetch tasks
export const getTasks = async (url) => {
  return await axios.get(`${url}/tasks`);
};

// Create a new task
export const createTask = async (url,task) => {
  return await axios.post(`${url}/tasks`, task);
};

// Update an existing task
export const updateTask = async (url,taskId, updatedTask) => {
  return await axios.put(`${url}/tasks/${taskId}`, updatedTask);
};

// Delete a task
export const deleteTask = async (url,taskId) => {
  return await axios.delete(`${url}/tasks/${taskId}`);
};

