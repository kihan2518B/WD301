import React from "react";
import { TaskItems } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItems) => void;
}
interface TaskFormState {
    title: string,
    dueDate: string,
    description: string
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState>{

    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "",
            dueDate: "",
            description: ""
        }
    }
    AddTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log(`Submitted the Form! ${this.state.title}`)
        const newTask = {
            title: this.state.title,
            dueDate: this.state.dueDate,
            description: this.state.description
        };
        this.props.addTask(newTask)
        this.setState({
            title: "",
            dueDate: "",
            description: ""
        });
    }
    titleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target.value)
        this.setState({
            title: event.target.value,
        })
    };
    dueDateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target.value)
        this.setState({
            dueDate: event.target.value
        })
    };
    descriptionChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target.value)
        this.setState({
            description: event.target.value
        })
    };



    render() {
        return (
            <div>
                <form className="flex flex-col gap-2 justify-center items-center border shadow-sm border-black w-[30vw] rounded-sm " onSubmit={this.AddTask}>
                    <h1 className="mt-2">Add Task</h1>
                    <input type="text" className="text-slate-500 border-2 rounded-sm border-gray-900 bg-gray-100 w-[25vw]" id="todoTitle" placeholder="Enter Something" value={this.state.title} onChange={this.titleChange} required />
                    <input type="date" id="todoDueDate" className="text-slate-500 border-2 rounded-sm border-gray-900 bg-gray-100 w-[25vw]" value={this.state.dueDate} onChange={this.dueDateChange} required />
                    <input type="text" id="todoDescription" className="text-slate-500 border-2 rounded-sm border-gray-900 bg-gray-100 w-[25vw]" placeholder="Enter Discription" value={this.state.description} onChange={this.descriptionChange} />
                    <button type="submit" className="bg-blue-300 w-20 rounded-sm mb-2" id="addTaskButton">Add Task</button>
                </form>
            </div>
        )
    }
}

export default TaskForm