import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/theme";

import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import router from "./routes"

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      <MembersProvider>

        <ProjectsProvider>
          <RouterProvider router={router} />
        </ProjectsProvider>
      </MembersProvider>
    </div>
  );
}
export default App;