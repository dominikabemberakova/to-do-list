import React, { useState, useEffect } from "react";
import Column from "./Column";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";
import "../globals.css";

const Board = ({ currentUrl }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    completed: false,
  });

  useEffect(() => {
    fetchTasks();
  }, [currentUrl]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks(currentUrl);
      setTasks(response.data.reverse());
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (newTask.title.trim() === "" || newTask.description.trim() === "") {
      alert("Title and description cannot be empty.");
      return;
    }
    try {
      const response = await createTask(currentUrl, {
        ...newTask,
        completed: false,
      });
      const createdTask = response.data;
      setTasks([createdTask, ...tasks]);
      setNewTask({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
        completed: false,
      });
      fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleEditTask = async (taskId, updatedTask) => {
    try {
      await updateTask(currentUrl, taskId, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(currentUrl, taskId);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
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
      console.error("Error updating task status:", error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <form onSubmit={handleCreateTask} className="task-form">
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
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          required
        />
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
        <button type="submit">Add Task</button>
      </form>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Column
          title="To Do"
          tasks={tasks.filter((task) => task.completed === false)}
          onMoveTask={handleMoveTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
        <Column
          title="Done"
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
