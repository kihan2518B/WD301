import React from 'react'
import Task from './Task'

interface Props {

}
interface TaskItems {
    title: string
}
interface State {
    Tasks: TaskItems[]
}

class TaskList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            Tasks: [],
        };
    }

    componentDidMount(): void {
        const Tasks = [
            { title: "Buy Groceries" },
            { title: "Pay rent" },
            { title: "Trade in market" },
            { title: "Go to temple" }
        ]
        this.setState((state, props) => ({ Tasks })) //this is second syntax of setstate method
    }

    render() {
        return (
            <div>
                {this.state.Tasks.map((task, index) => (
                    <Task key={index} title={task.title} />
                ))}
            </div>
        )

    }
}



export default TaskList
