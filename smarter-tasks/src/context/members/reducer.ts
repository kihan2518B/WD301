interface Member {
    id: number;
    name: string;
    email: string;
    organsation_id: number
}
export interface MembersState {
    Members: Member[];
    isLoading: boolean;
    isError: boolean;
}
// interface Action {
//     type: string;
//     payload?: any;
// }

export type MembersActions =
    | { type: 'FETCH_Members_REQUEST' }
    | { type: 'FETCH_Members_SUCCESS'; payload: Member[] }
    | { type: 'FETCH_Members_FAILURE'; payload: string }
    | { type: 'ADD_Members_SUCCESS'; payload: Member }
    | { type: 'DELETE_Members_SUCCESS'; payload: number }

export const initialState: MembersState = {
    Members: [],
    isLoading: false,
    isError: false,
};

export const reducer = (state: MembersState, action: MembersActions): MembersState => {
    switch (action.type) {
        case "FETCH_Members_REQUEST":
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case "FETCH_Members_SUCCESS":
            return {
                ...state,
                isLoading: false,
                Members: action.payload,
                isError: false
            };
        case "FETCH_Members_FAILURE":
            return {
                ...state,
                isLoading: true,
                isError: true
            };
        case 'DELETE_Members_SUCCESS':
            return {
                ...state,
                Members: state.Members.filter(member => member.id !== action.payload),
                isError: false,
            };
        case 'ADD_Members_SUCCESS':
            // Here I'll insert new new project object, which is coming in this 
            // `action.payload`, to the `projects` array present in state.
            return { ...state, Members: [...state.Members, action.payload] };
        default:
            return state;
    }
}