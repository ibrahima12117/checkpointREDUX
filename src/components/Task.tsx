import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/todoSlide';
import { TaskType } from './TaskTYpe';

interface TaskProps {
  task: TaskType;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input 
        type="checkbox" 
        checked={task.isDone} 
        onChange={() => dispatch(toggleTask(task.id))} 
      />
      <span>{task.description}</span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;

