import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TaskForm.css';
const TaskForm = ({ onSubmit, editingTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Pending',
    due_date: '',
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        ...editingTask,
        due_date: editingTask.due_date
          ? new Date(editingTask.due_date).toISOString().slice(0, 16)
          : '',
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      due_date: formData.due_date ? new Date(formData.due_date).toISOString() : null,
    };
    onSubmit(formattedData);
    setFormData({ title: '', description: '', status: 'Pending', due_date: '' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          placeholder="Enter task title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter task description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select id="status" name="status" value={formData.status} onChange={handleChange}>
          <option>Pending</option>
          <option>In-Progress</option>
          <option>Completed</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="due_date">Due Date</label>
        <input
          id="due_date"
          type="datetime-local"
          name="due_date"
          value={formData.due_date}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-button">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  editingTask: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    due_date: PropTypes.string,
  }),
};

export default TaskForm;