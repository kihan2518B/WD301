// import React, { useEffect } from "react";
import { TaskItems } from './types';
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppState {
    tasks: TaskItems[]
}


const TaskApp = () => {

    const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
        tasks: []
    });

    const addTask = (task: TaskItems) => {
        setTaskAppState({ tasks: [...taskAppState.tasks, task] })
    };

    const removeTask = (index: number) => {
        const updatedTasks = [...taskAppState.tasks]
        updatedTasks.splice(index, 1);
        setTaskAppState({ tasks: updatedTasks })
    }

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
                <div className="flex flex-col justify-center items-center border border-slate-200 rounded-xl p-4 shadow-xl">
                    <h1 className="text-red-400 text-xl font-bold text-center mb-2">
                        Pending
                    </h1>
                    <TaskList tasks={taskAppState.tasks} onDelete={removeTask} />
                    <div className="">
                        <TaskForm addTask={addTask} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskApp