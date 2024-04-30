import { useEffect } from "react";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";
import { Outlet } from "react-router-dom";
import { useMembersDispatch } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";

const ProjectContainer = () => {
  // Get the dispatch function from the projects context
  const projectDispatch = useProjectsDispatch();
  const memberDispatch = useMembersDispatch();
  // Fetch projects when the component mounts
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchMembers(memberDispatch)
  }, [projectDispatch,memberDispatch]); // Dependency array ensures the effect runs when projectDispatch changes

  // Render the child route components using Outlet
  return <Outlet />;
};

export default ProjectContainer;
