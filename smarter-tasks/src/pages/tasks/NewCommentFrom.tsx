import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useProjectsState } from "../../context/projects/context";
import { useTasksDispatch } from "../../context/task/context";
import { addTask } from "../../context/task/actions";
import { TaskDetailsPayload } from "../../context/task/types";

const NewCommentForm = () => {
    const [isOpen, setIsOpen] = useState(true);

    const { projectID, taskID } = useParams();
    const navigate = useNavigate();

    // Use react-hook-form to create form submission handler and state.
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TaskDetailsPayload>();
    if (errors) console.log(errors)
    const projectState = useProjectsState();
    const taskDispatch = useTasksDispatch();

    // We do some sanity checks to make sure the `projectID` passed is a valid one
    const selectedProject = projectState?.projects.filter(
        (project) => `${project.id}` === projectID
    )?.[0];
    if (!selectedProject) {
        return <>No such Project!</>;
    }
    function closeModal() {
        setIsOpen(false);
        navigate("../../");
    }
    const onSubmit: SubmitHandler<TaskDetailsPayload> = async (data) => {
        console.log(data)
        try {
            // Invoke the actual API and create a task.
            // addTask(taskDispatch, projectID ?? "", data);
            closeModal();
        } catch (error) {
            console.error("Operation failed:", error);
        }
    };
    return (
        <>
            <div className="mt-2">
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="textarea"
                        placeholder="Enter Comment"
                        required
                        autoFocus
                        id="commentBox"
                        {...register('description', { required: true })}
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue`}
                    />
                    <button
                        type="submit"
                        // Set an id for the submit button
                        id="addCommentBtn"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </>
    );
};
export default NewCommentForm;