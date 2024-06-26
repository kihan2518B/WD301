import { Dialog, Transition, Listbox } from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTasksDispatch, useTasksState } from "../../context/task/context";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import { updateTask } from "../../context/task/actions";
import { useMembersState } from "../../context/members/context";
import { ThemeContext } from "../../context/theme";

import CommentsList from "../comment/CommentsList";
import NewCommentForm from "../comment/NewComment";

import { useProjectsState } from "../../context/projects/context";
import { TaskDetailsPayload } from "../../context/task/types";

type TaskFormUpdatePayload = TaskDetailsPayload & {
    selectedPerson: string;
};
// Helper function to format the date to YYYY-MM-DD format
const formatDateForPicker = (isoDate: string) => {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    // Format the date as per the required format for the date picker (YYYY-MM-DD)
    return `${year}-${month}-${day}`;
};

const TaskDetails = () => {
    const { theme } = useContext(ThemeContext)
    const memberState = useMembersState()
    const [isOpen, setIsOpen] = useState(true);


    const { projectID, taskID } = useParams();
    const navigate = useNavigate();

    // Extract project and task details.
    const projectState = useProjectsState();
    const taskListState = useTasksState();
    const taskDispatch = useTasksDispatch();

    const selectedProject = projectState?.projects.filter(
        (project) => `${project.id}` === projectID
    )[0];

    const selectedTask = taskListState.projectData.tasks[taskID ?? ""];
    const [selectedPerson, setSelectedPerson] = useState(selectedTask.assignedUserName ?? "");

    // Use react-form-hook to manage the form. Initialize with data from selectedTask.
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TaskFormUpdatePayload>({
        defaultValues: {
            title: selectedTask.title,
            description: selectedTask.description,
            selectedPerson: selectedTask.assignedUserName,
            dueDate: formatDateForPicker(selectedTask.dueDate),
        },
    });
    console.log(errors)

    if (!selectedProject) {
        return <>No such Project!</>;
    }

    function closeModal() {
        setIsOpen(false);
        navigate("../../");
    }

    const onSubmit: SubmitHandler<TaskFormUpdatePayload> = async (data) => {
        console.log(data)
        const assignee = memberState?.Members?.filter(
            (member) => member.name === selectedPerson
        )?.[0];
        console.log(assignee)
        updateTask(taskDispatch, projectID ?? "", {
            ...selectedTask,
            ...data,
            assignee: assignee?.id,
        });
        closeModal();
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={` ${theme == "dark" ? 'text-gray-300 dark' : 'text-black'} w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 "
                                    >
                                        Task Details
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter title"
                                                id="title"
                                                {...register("title", { required: true })}
                                                className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                                            />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter description"
                                                id="description"
                                                {...register("description", { required: true })}
                                                className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                                            />
                                            <input
                                                type="date"
                                                required
                                                placeholder="Enter due date"
                                                id="dueDate"
                                                {...register("dueDate", { required: true })}
                                                className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                                            />
                                            <h3><strong>Assignee</strong></h3>
                                            <Listbox
                                                value={selectedPerson}
                                                onChange={setSelectedPerson}
                                            >
                                                <Listbox.Button className="w-full border rounded-md py-2 px-3 my-2  text-base text-left">
                                                    {selectedPerson}
                                                </Listbox.Button>
                                                <Listbox.Options className="absolute overflow-y-scroll h-14 mt-1 max-h-60 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {memberState?.Members.map((person) => (
                                                        <Listbox.Option
                                                            key={person.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                    ? "bg-blue-100 text-blue-900"
                                                                    : "text-gray-900"
                                                                }`
                                                            }
                                                            value={person.name}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                            }`}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                                                            <CheckIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Listbox>

                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >
                                                Update
                                            </button>
                                            <button
                                                type="submit"
                                                onClick={closeModal}
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >
                                                Cancel
                                            </button>
                                        </form>
                                        <hr className="mt-2" />
                                        <h3 className={`${theme == "dark" ? 'text-gray-300' : 'text-black'}`}>Comments</h3>
                                        <NewCommentForm />
                                        <CommentsList />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default TaskDetails;