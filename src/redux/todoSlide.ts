import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  description: string;
  isDone: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask = {
        id: Date.now(),
        description: action.payload,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
