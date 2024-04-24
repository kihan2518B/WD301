import React, { useEffect, useReducer } from 'react';
import { API_ENDPOINT } from '../../config/constants';
interface Project {
    id: number;
    name: string;
}
interface State {
    projects: Project[];
    isLoading: boolean;
    error: boolean;
}
interface Action {
    type: string;
    payload?: any;
}
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "API_CALL_START":
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case "API_CALL_END":
            return {
                ...state,
                isLoading: false,
                projects: action.payload,
                error: false
            };
        case "API_CALL_ERROR":
            return {
                ...state,
                isLoading: true,
                error: true
            };
        default:
            return state;
    }
}
const ProjectList = () => {
    const [state, dispatch] = useReducer(reducer, {
        projects: [],
        isLoading: false,
        error: false
    });

    // const [projects, setProjects] = useState<Project[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        // Fetch the list of projects here
        fetchProjects();
    }, []);
    const fetchProjects = async () => {
        const token = localStorage.getItem("authToken") ?? "";
        console.log(token)
        try {
            dispatch({ type: "API_CALL_START" });
            // setIsLoading(true);
            const response = await fetch(`${API_ENDPOINT}/projects`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
            });
            const data = await response.json();
            dispatch({ type: "API_CALL_END", payload: data });
            // setProjects(data);
            // setIsLoading(false);
        } catch (error) {
            console.log('Error fetching projects:', error);
            // setIsLoading(false);
            dispatch({ type: "API_CALL_ERROR" });
        }
    };
    return (
        <div>
            <h2>Project List</h2>
            {state.isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {state.projects.map(project => (
                        <div key={project.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                        </div>
                    ))}
                </ul>
            )}
            {state.error ? (
                <div className='bg-red-400 text-black'>Error While loading Projects</div>
            ) : (
                <div></div>
            )}
        </div>
    );
};
export default ProjectList;