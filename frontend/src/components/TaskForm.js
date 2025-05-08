import React, { useState, useEffect } from 'react';

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
        due_date: editingTask.due_date ? editingTask.due_date.slice(0, 16) : '',
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', description: '', status: 'Pending', due_date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Pending</option>
        <option>In-Progress</option>
        <option>Completed</option>
      </select>
      <input type="datetime-local" name="due_date" value={formData.due_date} onChange={handleChange} />
      <button type="submit">{editingTask ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
