/*  eslint-disable react/prop-types */
import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
    title: string;
    assigneeName: string;
    dueDate?: string;
    completedAtDate?: string; //makes it optional
}

const TaskCard: React.FC<TaskCardProps> = (props) => {

    let DateElement =
        props.dueDate ? (
            <p>Due on: {props.dueDate}</p>

        ) : (
            <p>Completed on: {props.completedAtDate}</p>
        )

    return (
        <div className="w-[35vw] h-fit border-2 border-gray-900 px-5 py-5 rounded-lg">
            <div>
                <h4 className="text-xl font-serif font-bold text-red-500">{props.title}</h4>
            </div>
            <div className="">
                {DateElement}
            </div>
            <div className="assignee">
                <h4>Assignee: {props.assigneeName}</h4>

            </div>
        </div>
    )
}

/* eslint-disable react/prop-types */

export default TaskCard;
