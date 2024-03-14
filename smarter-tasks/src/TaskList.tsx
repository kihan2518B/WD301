import React from 'react'
import Task from './Task'
import { TaskItems } from './types'

interface Props {
    tasks: TaskItems[]
}

interface State { }

class TaskList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            tasks: [],
        };
    }

    render() {
        return (
            <div>
                {this.props.tasks.map((task, index) => (
                    <Task key={index} title={task.title} />
                ))}
            </div>
        )

    }
}



export default TaskList
