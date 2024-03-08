import './App.css'
import Task from './Task';
import Clock from './Clock';

function App() {

  return (
    <div className='text-red-400 font-bold flex items-center justify-center'>
      <Task />
      <Clock />
    </div>
  )
}

export default App
