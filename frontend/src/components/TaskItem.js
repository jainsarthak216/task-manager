import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const formatDueDate = (dueDate) => {
    if (!dueDate) return 'None';
    try {
      const date = new Date(dueDate);
      return date.toISOString(); // Ensure ISO 8601 format
    } catch (error) {
      console.error('Invalid due_date format:', error);
      return 'Invalid Date';
    }
  };

  return (
    <div className='task-card'>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due: {formatDueDate(task.due_date)}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string,
    due_date: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;
