import React from "react";

interface TaskProps {
    title: string
}
class Task extends React.Component<TaskProps> {

    render() {
        return <div> {this.props.title}</div>
    }
}

export default Task