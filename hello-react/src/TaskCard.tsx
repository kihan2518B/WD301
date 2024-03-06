/*  eslint-disable react/prop-types */
import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
    title: string;
    completed: boolean;
    assigneeName: string;
    dueDate: string;
    completedAtDate?: string; //makes it optional
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
    //logic for Date Element
    let Date = props.dueDate;
    const Assignee = props.assigneeName;
    let title = props.title;
    let DateElement: string;
    if (props.completed) {
        DateElement = "completed on: " + props.completedAtDate;
    }
    else {
        DateElement = "due on: " + Date;
    }

    return (
        <div className="w-[35vw] h-fit border-2 border-gray-900 px-5 py-5 rounded-lg">
            <div>
                <h4 className="text-xl font-serif font-bold text-red-500">{title}</h4>
            </div>
            <div className="">
                <p>{DateElement}</p>
            </div>
            <div className="assignee">
                <h4>Assignee:{Assignee}</h4>

            </div>
        </div>
    )
}

/* eslint-disable react/prop-types */

export default TaskCard;
