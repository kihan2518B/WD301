import React, { useEffect, useReducer } from 'react';
import { fetchProjects } from "../../context/projects/actions";
import { useProjectsDispatch } from "../../context/projects/context";
import ProjectListItems from './ProjectListItems';


const ProjectList = () => {

    const dispatchProjects = useProjectsDispatch();

    // const [projects, setProjects] = useState<Project[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        // Fetch the list of projects here
        fetchProjects(dispatchProjects)
    }, []);

    return (
        // <div>
        //     <h2>Project List</h2>
        //     {/* {state.isLoading ? (
        //         <div>Loading...</div>
        //     ) : (
        //         <ul>
        //             {state.projects.map(project => (
        //                 <div key={project.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        //                     <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
        //                 </div>
        //             ))}
        //         </ul>
        //     )}
        //     {state.error ? (
        //         <div className='bg-red-400 text-black'>Error While loading Projects</div>
        //     ) : (
        //         <div></div>
        //     )} */}
        // </div>
        <div className='grid gap-4 grid-cols-4 mt-5'>
            <ProjectListItems />
        </div>
    );
};
export default ProjectList;