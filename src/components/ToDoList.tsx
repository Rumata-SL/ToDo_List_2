import React, {FC} from "react";
import "../App.css";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
type ToDoListPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void
}

export const ToDoList: FC<ToDoListPropsType> = ({title, tasks, removeTask}) => {
    const task = tasks.map((i => {
        return (<li key={i.id}><input type="checkbox" checked={i.isDone}/><span className={"span"}>{i.title}</span>
            <button onClick={() => removeTask(i.id)}>X</button>
        </li>)
    }))

    return (
        <div className={"item"}>
            <h3>{title}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                {task}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>

        </div>
    );
};

