import React, {FC} from "react";
import "../App.css";
import {FilterValuesType} from "../App";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
type ToDoListPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    changeFilter: (value:FilterValuesType)=>void
}

export const ToDoList: FC<ToDoListPropsType> = ({title, tasks, removeTask,changeFilter}) => {
    const task = tasks.map((i => {
        return (<li key={i.id}>
            <input type="checkbox" checked={i.isDone}/>
            <span className={"span"}>{i.title}</span>
            <button onClick={() => removeTask(i.id)}>X</button>
        </li>)
    }))

   /* const changeFilterHandler = (value:FilterValuesType)=>{
        callback(value)
    }*/


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
                <button onClick={()=>changeFilter("all")}>All</button>
                <button onClick={()=>changeFilter("active")}>Active</button>
                <button onClick={()=>changeFilter("completed")}>Completed</button>
            </div>

        </div>
    );
};

