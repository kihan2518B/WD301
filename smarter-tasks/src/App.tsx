import './App.css'
// import Task from './Task';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {

  return (
    <div className='text-red-400 font-bold flex items-center justify-center'>
      <TaskList />
      <TaskForm />
    </div>
  )
}

export default App
