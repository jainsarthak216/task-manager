import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (!tasks.length) return <p>No tasks found.</p>;
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
