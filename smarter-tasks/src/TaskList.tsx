import Task from './Task'
import { TaskItems } from './types'

interface Props {
    tasks: TaskItems[]
}

// interface State { }

const TaskList = (props: Props) => {
    return (
        props.tasks.map((task, index) => (
            <Task key={index} title={task.title} dueDate={task.dueDate} discription={task.description} />
        ))
    );
}



export default TaskList
