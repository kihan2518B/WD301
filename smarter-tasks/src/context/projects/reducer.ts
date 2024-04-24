interface Project {
    id: number;
    name: string;
}
export interface ProjectsState {
    projects: Project[];
    isLoading: boolean;
    isError: boolean;
}
// interface Action {
//     type: string;
//     payload?: any;
// }

export type ProjectsActions =
    | { type: 'FETCH_PROJECTS_REQUEST' }
    | { type: 'FETCH_PROJECTS_SUCCESS'; payload: Project[] }
    | { type: 'FETCH_PROJECTS_FAILURE'; payload: string }
    | { type: 'ADD_PROJECT_SUCCESS'; payload: Project }

export const initialState: ProjectsState = {
    projects: [],
    isLoading: false,
    isError: false,
};

export const reducer = (state: ProjectsState, action: ProjectsActions): ProjectsState => {
    switch (action.type) {
        case "FETCH_PROJECTS_REQUEST":
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case "FETCH_PROJECTS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                projects: action.payload,
                isError: false
            };
        case "FETCH_PROJECTS_FAILURE":
            return {
                ...state,
                isLoading: true,
                isError: true
            };
        case 'ADD_PROJECT_SUCCESS':
            // Here I'll insert new new project object, which is coming in this 
            // `action.payload`, to the `projects` array present in state.
            return { ...state, projects: [...state.projects, action.payload] };
        default:
            return state;
    }
}