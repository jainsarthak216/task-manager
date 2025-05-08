import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due: {task.due_date ? new Date(task.due_date).toLocaleString() : 'None'}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
