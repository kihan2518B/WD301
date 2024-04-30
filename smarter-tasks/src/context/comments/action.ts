import { API_ENDPOINT } from "../../config/constants";

import { CommentsDispatch, CommentListAvailableAction } from "./types";

const token = localStorage.getItem("authToken") ?? ""
export const fetchComments = async (dispatch: CommentsDispatch, projectID: string, taskID: string) => {
    try {
        //This will toogle "isLoading to true"
        dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST });

        //Getting Comments from backend Server
        const response = await fetch(
            `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if (!response.ok) {
            throw new Error("Failed to get Comments")
        }
        const data = await response.json()
        console.log("Commenst data: ", data);
        dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS, payload: data })
    }
    catch (error) {
        console.log(error)
        dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE, payload: "unable to load comments" })
    }
}