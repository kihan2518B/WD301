import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";

import AccountLayout from "../layouts/account";
import ProtectedRoute from "./ProtectedRoutes";
import Notfound from "../pages/Notfound";

const Signin = React.lazy(() => import("../pages/signin"))
const Signup = React.lazy(() => import("../pages/signup"));
const Projects = React.lazy(() => import("../pages/projects"));
const Members = React.lazy(() => import("../pages/members"));
const Logout = React.lazy(() => import("../pages/logout"));
const ProjectDetails = React.lazy(() => import("../pages/project_details"));
const NewTask = React.lazy(() => import("../pages/tasks/NewTask"));
const TaskDetailsContainer = React.lazy(
    () => import("../pages/tasks/TaskDetailsContainer")
);

const router = createBrowserRouter([
    {
        path: "*",
        element: <Notfound />
    },
    {
        path: "/",
        element: <Navigate to="/signin" replace />
    },
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/account",
        element: (
            <ProtectedRoute>
                <AccountLayout />
            </ ProtectedRoute>
        ),
        ErrorBoundary: () => <>Failed to load the page</>,
        children: [
            { index: true, element: <Navigate to="/account/projects" replace /> },
            {
                path: "projects",
                element: <ProjectDetails />,
                children: [
                    { index: true, element: <Projects /> },
                    {
                        path: ":projectID",
                        element: <ProjectDetails />,
                        children: [
                            { index: true, element: <></> },
                            {
                                path: "tasks",
                                children: [
                                    { index: true, element: <Navigate to="../" replace /> },
                                    { path: "new", element: <NewTask /> },
                                    {
                                        path: ":taskID",
                                        children: [{ index: true, element: <TaskDetailsContainer /> }],
                                    },
                                ],
                            }
                        ]
                    }
                ]
            },
            {
                path: "members",
                element: (<Members />)
            },
        ]
    },
    {
        path: "logout",
        element: (<Logout />)
    }
]);
export default router;