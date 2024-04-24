import React, { useEffect, useReducer } from 'react';
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import MemberListItems from './MemberListItems';


const MemberList = () => {

    const dispatchMembers = useMembersDispatch();

    // const [projects, setProjects] = useState<Project[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        // Fetch the list of projects here
        fetchMembers(dispatchMembers)
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
        <div className='flex flex-wrap gap-5 mt-5'>
            <MemberListItems />
        </div>
    );
};
export default MemberList;