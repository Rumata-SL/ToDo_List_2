import React, {useState} from "react";
import "./App.css";
import {TasksType, ToDoList} from "./components/ToDoList";

function App() {

    const [tasks1, setTasks1] = useState([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: true},
        {id: 4, title: "REACT", isDone: false},
    ])

    /*const tasks2: Array<TasksType> = [
        {id: 1, title: "De Principatibus", isDone: true},
        {id: 2, title: "Dialogs", isDone: false},
        {id: 3, title: "Rhetoric", isDone: true},
        {id: 4, title: "Mahabharat", isDone: true},
    ]
    const tasks3: Array<TasksType> = [
        {id: 1, title: "Strawberry meadow", isDone: true},
        {id: 2, title: "Seventh seal", isDone: true},
        {id: 3, title: "Nights of Cabiria", isDone: false},
        {id: 4, title: "City lights", isDone: true},
    ]*/

    const removeTask = (id: number) => {
        let filterTask = tasks1.filter(t => t.id !== id)
        setTasks1(filterTask)
    }

    return (
        <div className="App">
            <h1>Happy hacking</h1>
            <div className={"container"}>
                <ToDoList title={"What to learn"} tasks={tasks1} removeTask={removeTask}/>
                {/*<ToDoList title={"What to read"} tasks={tasks2} removeTask={removeTask}/>
                <ToDoList title={"What to look"} tasks={tasks3} removeTask={removeTask}/>*/}
            </div>
        </div>
    );
}

export default App;
