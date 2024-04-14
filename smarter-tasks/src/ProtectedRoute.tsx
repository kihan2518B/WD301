import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const authenticated = localStorage.getItem("authToken");//We use !! to convert to boolean
    if (authenticated) {
        return <>{children}</>;
    } else {
        return <Navigate to="/signin" />;
    }
}