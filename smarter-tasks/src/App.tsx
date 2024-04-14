import './App.css'
// import TaskApp from './TaskApp';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Notfound from './pages/Notfound';
// import ReactPlayground from './ReactPlayground';
import Signup from './pages/signup';
import Signin from './pages/signin/index';
import Dashboard from './pages/dashboard';


const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  return (
    <div>
      {/* <Form /> */}
      {/* <ReactPlayground /> */}
      <RouterProvider router={router} />
    </div>
  );
}


export default App
