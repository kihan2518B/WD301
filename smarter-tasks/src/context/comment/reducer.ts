import { CommentListAvailableAction, CommentAction, CommentDetails } from "./types";

export interface CommentState {
    Comments: CommentDetails[],
    isLoading: boolean,
    isError: boolean,
    ErrorMessage: string
}

export const initialState: CommentState = {
    Comments: [],
    isLoading: false,
    isError: false,
    ErrorMessage: ""
}

export const CommentReducer = (
    state: CommentState = initialState,
    action: CommentAction
) => {
    // console.log("state:", state);
    // console.log("Action:", action);
    switch (action.type) {
        case CommentListAvailableAction.FETCH_COMMENTS_REQUEST:
            return { ...state, isLoading: true };
        case CommentListAvailableAction.FETCH_COMMENTS_SUCCESS:
            // console.log("Payload: ", action.payload)
            return { ...state, isLoading: false, Comments: action.payload }
        case CommentListAvailableAction.FETCH_COMMENTS_FAILURE:
            return { ...state, isLoading: false, ErrorMessage: action.payload }

        case CommentListAvailableAction.CREATE_COMMENT_REQUEST:
            // console.log("Create Comment Request")
            return { ...state, isLoading: true };
        case CommentListAvailableAction.CREATE_COMMENT_SUCCESS:
            // console.log("Create Comment Success")
            // console.log("Payload: ", action.payload)
            return { ...state, isLoading: false, Comments: [...state.Comments, action.payload] }
        case CommentListAvailableAction.CREATE_COMMENT_FAILURE:
            return { ...state, isLoading: false, ErrorMessage: action.payload }
        default:
            return state;
    }
}