import React, { useEffect, useState } from 'react';
import './App.css';
import { getTasks, createTask, updateTask, deleteTask } from './api/tasks';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSubmit = async (task) => {
    if (editingTask) {
      await updateTask(editingTask.id, task);
      setEditingTask(null);
    } else {
      await createTask(task);
    }
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleSubmit} editingTask={editingTask} />
      <hr />
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDelete} />
    </div>
  );
}

export default App;
