import "./ToDoList.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";

export default function ToDoList() {
    const [todos, setTodos] = useState([
        { todo: "Sample Task", id: uuidv4(), isDone: false },
    ]);
    const [task, setTask] = useState("");

    // Adding tasks:
    let updateTask = (event) => {
        setTask(event.target.value);
    };

    let updateTodo = () => {
        let newTask = task.trim();
        if (newTask === "") return;
        setTodos([...todos, { todo: newTask, id: uuidv4(), isDone: false }]);
        setTask("");
    };

    // Deleting Tasks:
    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    // Delete All Tasks:
    let deleteAllTodos = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id === ""));
    };

    // MarkAsDone Functionality:
    let MarkAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((item) => {
                if (item.id === id) {
                    return { ...item, isDone: !item.isDone };
                }
                return item;
            })
        );
    };

    return (
        <div className="container">
            <h1>To-Do App</h1>
            <div className="inputField">
                <input
                    placeholder="Add new task..."
                    value={task}
                    onChange={updateTask}
                />
                <button onClick={updateTodo} className="addBtn">
                    Add
                </button>
            </div>
            <br />
            <br />
            <hr />
            <h2 style={{ fontSize: "1.7rem" }}>🔹Task List🔹</h2>
            {todos.length ? (
                <Button
                    variant="contained"
                    className="optBtns"
                    onClick={deleteAllTodos}
                    style={{
                        width: "100%",
                        fontSize: "1rem",
                        borderRadius: "2rem",
                    }}
                >
                    Clear all Tasks
                </Button>
            ) : (
                ""
            )}
            <ul>
                {todos.map((item) => {
                    return (
                        <li key={item.id}>
                            <span className={item.isDone ? "done" : "todo"}>
                                {item.todo}
                            </span>
                            &nbsp;&nbsp;
                            <button
                                onClick={() => deleteTodo(item.id)}
                                className="optBtns"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => MarkAsDone(item.id)}
                                className="optBtns"
                            >
                                {item.isDone ? "Undo" : "Mark as Done"}
                            </button>
                            <br />
                            <br />
                        </li>
                    );
                })}
            </ul>
            <br />
            <p>
                Made with{" "}
                <span
                    style={{
                        color: "#fff",
                        fontSize: "20px",
                        marginRight: "5px",
                    }}
                >
                    ❤️
                </span>
                by Vinit Gupta
            </p>
        </div>
    );
}
