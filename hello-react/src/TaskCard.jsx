/*  eslint-disable react/prop-types */
import "./TaskCard.css"

const TaskCard = (props) => {
    //logic for Date Element
    let Date = props.dueDate;
    const Assignee = props.assigneeName;
    let title = props.title;
    let DateElement;
    if (props.completed) {
        DateElement = "completed on: " + props.completedAtDate;
    }
    else {
        DateElement = "due date: " + Date;
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
                <h4>Assignee name:{Assignee}</h4>

            </div>
        </div>
    )
}

/* eslint-disable react/prop-types */

export default TaskCard;
