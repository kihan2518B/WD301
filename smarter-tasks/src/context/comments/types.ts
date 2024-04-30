import React from "react"

export type CommentDetails = {
    id: number,
    task_id: number,
    owner: number,
    description: string,
    createdAt: string,
    updatedAt: string
}

export type Comment = Omit<CommentDetails, "id" | "task_id" | "updatedAt" | "createdAt">

export enum CommentListAvailableAction {
    FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

    CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
    CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
    CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}

export type CommentAction =
    | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
    | { type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS; payload: CommentDetails[] }
    | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }

    | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST }
    | { type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS; payload: CommentDetails }
    | { type: CommentListAvailableAction.CREATE_COMMENT_FAILURE; payload: string }


export type CommentPayload = {
    owner: string, //here owner will consist of name of owner
    description: string
}

export type CommentsDispatch = React.Dispatch<CommentAction>;