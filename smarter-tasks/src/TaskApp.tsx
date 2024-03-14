import React from "react";
import { TaskItems } from './types';
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProps {

}
interface TaskAppState {
    tasks: TaskItems[]
}

class TaskApp extends React.Component<TaskAppProps, TaskAppState> {

    constructor(props: TaskAppProps) {
        super(props)
        this.state = {
            tasks: []
        }
    }
    addTask = (task: TaskItems) => {
        this.setState((state) => {
            return {
                tasks: [...state.tasks, task]
            };
        });
    };

    render() {
        return (
            <div className="container py-10 max-w-4xl mx-auto">
                <h1 className="text-3xl mb-2 font-bold text-slate-700">
                    Smarter Tasks
                </h1>
                <h1 className="text-lg mb-6 text-slate-600">
                    <span className="font-bold">Project: </span>
                    Graduation Final Year Project (Revamp college website)
                </h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-xl p-4">
                        <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
                            Pending
                        </h1>
                        <TaskList tasks={this.state.tasks} />
                        <TaskForm addTask={this.addTask} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskApp