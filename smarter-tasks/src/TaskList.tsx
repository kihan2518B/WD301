import Task from './Task'
import { TaskItems } from './types'

interface Props {
    tasks: TaskItems[]
}

// interface State { }

const TaskList = (props: Props) => {
    return (
        <ul>
            {props.tasks.map((task, index) => (
                <li key={index}>
                    <Task title={task.title} dueDate={task.dueDate} discription={task.description} />
                </li>
            ))}
        </ul>
    );
}



export default TaskList
