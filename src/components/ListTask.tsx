import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { RootState } from '../redux/store';

const ListTask: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.todo.tasks);

  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
