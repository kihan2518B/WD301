import React from "react";
import { TaskItems } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItems) => void;
}
interface TaskFormState {
    title: string
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState>{

    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: ""
        }
    }
    AddTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log(`Submitted the Form! ${this.state.title}`)
        const newTask = {
            title: this.state.title
        };
        this.props.addTask(newTask)
        this.setState({ title: "" });
    }
    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target.value)
        this.setState({
            title: event.target.value
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.AddTask}>
                    <input type="text" placeholder="Enter Something" value={this.state.title} onChange={this.titleChanged} />
                    <button type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}

export default TaskForm