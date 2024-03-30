import Task from './Task'
import { TaskItems } from './types'

interface Props {
    tasks: TaskItems[],
    onDelete: (index: number) => void;
}

// interface State { }

const TaskList = (props: Props) => {
    const handledelete = (index: number) => {
        // console.log(index, "Delete button clicked")
        props.onDelete(index)
    }
    return (
        <ul>
            {props.tasks.map((task, index) => (
                <li key={index}>
                    <Task title={task.title} dueDate={task.dueDate} discription={task.description} />
                    <button type="submit"
                        className="deleteTaskButton text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => handledelete(index)}
                    >
                        Delete task
                    </button>
                </li>
            ))}
        </ul>
    );
}



export default TaskList
