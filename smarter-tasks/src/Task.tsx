import React from "react";

interface TaskProps {
    title: string,
    discription: string,
    dueDate: string
}
class Task extends React.Component<TaskProps> {

    render() {
        return (
            <div className="TaskItem p-10 m-5 rounded-lg shadow-xl border border-gray-100">
                <h2 className="text-base font-bold my-1">{this.props.title}</h2>
                <p className="text-sm text-slate-500">
                    Due Date: {this.props.dueDate}
                </p>
                <p className="text-sm text-slate-500">
                    Description: {this.props.discription}
                </p>
            </div>
        )
    }
}

export default Task