import './App.css'
// import TaskApp from './TaskApp';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import Signin from './pages/Signin';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './pages/NotFound';

import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App
