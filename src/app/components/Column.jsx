import React, { useState } from 'react';

const Column = ({ title, tasks, onMoveTask, onEditTask, onDeleteTask }) => {
  const [editingTaskId, setEditingTaskId] = useState(null); 
  const [editedTask, setEditedTask] = useState({ title: '', description: '', priority: 'Medium' });  

  const startEditing = (task) => {
    setEditingTaskId(task.id); 
    setEditedTask({ title: task.title, description: task.description, priority: task.priority || 'Medium' });  
  };

  const handleEditInputChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value }); 
  };

  const saveTaskChanges = () => {
    if (editedTask.title.trim() === '' || editedTask.description.trim() === '') {
      alert("Title and description cannot be empty.");
      return; 
    }
    onEditTask(editingTaskId, editedTask);  
    setEditingTaskId(null);  
  };

  return (
    <div className="column-container">
      <h2>{title}</h2>
      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${task.completed ? 'task-completed' : 'task-pending'} priority-${(task.priority || 'Medium').toLowerCase()}`} 
            >
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  name="title"
                  value={editedTask.title}
                  onChange={handleEditInputChange}
                  placeholder="Edit Task Title"
                />
                <input
                  type="text"
                  name="description"
                  value={editedTask.description}
                  onChange={handleEditInputChange}
                  placeholder="Edit Task Description"
                />
                <select
                  name="priority"
                  value={editedTask.priority}
                  onChange={handleEditInputChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <input
                  type="date"
                  name="dueDate"
                  value={editedTask.dueDate}
                  onChange={handleEditInputChange}
                />
                <button onClick={saveTaskChanges}>Save</button>
                <button onClick={() => setEditingTaskId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <h3 className="task-title">{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <p>Priority: {task.priority || 'Medium'}</p>  
                <p>Due Date: {task.dueDate || 'No due date set'}</p> 

                <div className="task-actions">
                  <button onClick={() => onMoveTask(task.id, !task.completed)}>
                    {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                  </button>
                  <button onClick={() => startEditing(task)}>Edit</button>
                  <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
