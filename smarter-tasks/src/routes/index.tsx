import { createBrowserRouter, Navigate } from "react-router-dom";

import Signin from "../pages/signin"
import Signup from "../pages/signup"
import AccountLayout from "../layouts/account";
import ProtectedRoute from "./ProtectedRoutes";
import Projects from "../pages/projects/index.tsx";
import Members from "../pages/members/index.tsx";
import Logout from "../pages/logout";
import Notfound from "../pages/Notfound.tsx";
import NewTask from "../pages/tasks/NewTask.tsx";
import ProjectContainer from "../pages/projects/ProjectContainer.tsx";
import ProjectDetails from "../pages/project_details";
import TaskDetailsContainer from "../pages/tasks/TaskDetailsContainer";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Notfound />
    },
    {
        path: "/",
        element: <Signin />
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
        children: [
            { index: true, element: <Navigate to="/account/projects" replace /> },
            {
                path: "projects",
                element: <ProjectContainer />,
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
                                        children: [{ index: true, element: <TaskDetailsContainer/> }],
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