import React, { useState, useEffect } from 'react';
import Column from './Column';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api'; 

const Board = ({currentUrl}) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

 
  useEffect(() => {
    fetchTasks();
  }, [currentUrl]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks(currentUrl);
      console.log("Fetched tasks from MockAPI:", response.data); 
      setTasks(response.data); 
    } catch (error) {
      console.error('Error fetching tasks from MockAPI:', error);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (newTask.title.trim() === '' || newTask.description.trim() === '') {
      alert("Title and description cannot be empty.");
      return;
    }
    try {
      await createTask(currentUrl, { ...newTask, completed: false }); 
      setNewTask({ title: '', description: '' }); 
      fetchTasks(); 
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };


  const handleEditTask = async (taskId, updatedTask) => {
    try {
      await updateTask(currentUrl, taskId, updatedTask); 
      fetchTasks(); 
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };


  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(currentUrl, taskId);
      fetchTasks(); 
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

 
  const handleMoveTask = async (taskId, newComplete) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (!taskToUpdate) return;

    taskToUpdate.completed = newComplete; 
    try {
      await updateTask(currentUrl, taskId, taskToUpdate); 
      fetchTasks(); 
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          required
        />
        <button type="submit">Add Task</button>
      </form>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Column
          title= "To Do"
          tasks={tasks.filter((task) => task.completed === false)}
          onMoveTask={handleMoveTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
        <Column
          title= "Done"
          tasks={tasks.filter((task) => task.completed === true)}
          onMoveTask={handleMoveTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default Board;
