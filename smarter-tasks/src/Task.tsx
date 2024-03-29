
interface TaskProps {
    // key: number,
    title: string,
    discription: string,
    dueDate: string
}

const Task = (props: TaskProps) => {
    // console.log(props.key)


    return (
        < div className="TaskItem p-10 m-5 rounded-lg shadow-xl border border-gray-100" >
            <h2 className="text-base font-bold my-1">{props.title}</h2>
            <p className="text-sm text-slate-500">
                Due Date: {props.dueDate}
            </p>
            <p className="text-sm text-slate-500">
                Description: {props.discription}
            </p>
            <button id="addTaskButton"
                type="submit"
                className="deleteTaskButton text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Delete task
            </button>
        </div >
    )
}

export default Task