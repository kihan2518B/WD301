import React, { useEffect } from "react";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";
import { Outlet } from "react-router-dom";

const ProjectContainer = () => {
  // Get the dispatch function from the projects context
  const projectDispatch = useProjectsDispatch();

  // Fetch projects when the component mounts
  useEffect(() => {
    fetchProjects(projectDispatch);
  }, [projectDispatch]); // Dependency array ensures the effect runs when projectDispatch changes

  // Render the child route components using Outlet
  return <Outlet />;
};

export default ProjectContainer;
