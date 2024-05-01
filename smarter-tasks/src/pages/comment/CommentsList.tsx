import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useCommentDispatch, useCommentState } from "../../context/comment/context"
import { fetchComments } from "../../context/comment/actions";
import { useMembersState } from "../../context/members/context";

const formatCommentDate = (commentDate: string) => {
    const commentDateObject: Date = new Date(commentDate);
    const year = commentDateObject.getFullYear();
    const month = String(commentDateObject.getMonth() + 1);
    const day = String(commentDateObject.getDate());
    return `${day}-${month}-${year}`;
};

const CommentsList = () => {
    const CommentDispatch = useCommentDispatch();
    const { projectID, taskID } = useParams();
    // console.log("projectID", projectID, "->taskID", taskID);
    useEffect(() => {
        fetchComments(CommentDispatch, projectID ?? "", taskID ?? "")
    }, [projectID, taskID, CommentDispatch])

    const state = useCommentState();
    // console.log("Comments State", state);
    const { Comments, isLoading, isError, ErrorMessage } = state;
    // console.log(Comments);
    const members: any = useMembersState()?.Members;
    // console.log("members", members);
    if (Comments.length == 0 && isLoading) {
        return <div className={`text-blue-400 font-semibold`}>Loading...</div>
    }
    if (isError) {
        return <div>{ErrorMessage}</div>
    }
    if (Comments.length == 0) {
        return <div className={`text-blue-400 font-semibold`}>Add First Comment</div>
    }


    return (
        <>
            {/* <div className="mt-4 ">
                <Link 
                    to={`comments/new`}
                >Add New Comment</Link>
            </div> */}
            <b>List of Comments:</b>
            {Comments.map((comment: any) => {
                const commentOwner = members.filter(
                    (member: any) => member.id === comment.owner);

                return (
                    <div className='comment my-3 bg-white-200 rounded p-3'
                        key={`${comment.owner}-${comment.createdAt}`} >
                        <fieldset className="rounded-md border-2 border-black-800 ">
                            <legend>{`${commentOwner[0].name}: ${formatCommentDate(comment.createdAt)}`}</legend>
                            <p>{comment.description}</p>
                        </fieldset>
                    </div>
                );
            })}
        </>
    );
}

export default CommentsList
