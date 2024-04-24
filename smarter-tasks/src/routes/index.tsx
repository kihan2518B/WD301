import { createBrowserRouter, Navigate } from "react-router-dom";

import Signin from "../pages/signin"
import Signup from "../pages/signup"
import AccountLayout from "../layouts/account";
import ProtectedRoute from "../ProtectedRoute";
import Projects from "../pages/projects/index.tsx";
import Members from "../pages/members/index.tsx";
import Logout from "../pages/logout";
import Notfound from "../pages/Notfound.tsx";

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
                element: (<Projects />)
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