
import axios from 'axios';

const BASE_URL = 'https://66f3291b71c84d8058780204.mockapi.io'; 

export const getTasks = async () => {
  return await axios.get(`${BASE_URL}/tasks`);
};

export const createTask = async (task) => {
  return await axios.post(`${BASE_URL}/tasks`, task);
};

export const updateTask = async (taskId, updatedTask) => {
  return await axios.put(`${BASE_URL}/tasks/${taskId}`, updatedTask);
};

export const deleteTask = async (taskId) => {
  return await axios.delete(`${BASE_URL}/tasks/${taskId}`);
};
