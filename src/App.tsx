
import AddTask from './components/AddTask';
import ListTask from './components/ListTask'; // Corrigez la faute de frappe ici

const App: React.FC = () => {
  return (
    <div>
      <h1>ToDo List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
