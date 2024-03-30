
interface TaskProps {
    // key: number,
    title: string,
    discription: string,
    dueDate: string
}

const Task = (props: TaskProps) => {
    // console.log(props.key)


    return (
        < div className="TaskItem p-10 m-5 rounded-lg shadow-xl border border-gray-100" >
            <h2 className="text-base font-bold my-1">{props.title}</h2>
            <p className="text-sm text-slate-500">
                Due Date: {props.dueDate}
            </p>
            <p className="text-sm text-slate-500">
                Description: {props.discription}
            </p>
        </div >
    )
}

export default Task