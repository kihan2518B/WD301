import './App.css'
// import TaskApp from './TaskApp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/tasks',
      element: <TaskListPage />
    },
  ])

  return (
    <div className='text-red-400 font-bold flex items-center justify-center'>
      <RouterProvider router={router} />
      {/* <TaskApp /> */}
    </div>
  )
}

export default App
