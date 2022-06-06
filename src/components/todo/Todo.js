import React, { useEffect, useState } from "react";
import "./Todo.scss";

function Todo() {
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingText, setEditingText] = useState("");
  useEffect(() => {
    const temp = localStorage.getItem("task")
    const loadTasks = JSON.parse(temp)
    if (loadTasks) {
      setTask(loadTasks)
    }
  }, [])
  useEffect(() => {
    const json = JSON.stringify(task)
    localStorage.setItem("task",json)
  }, [task])

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    setTask([...task].concat(newTodo));
    setTodo("");
  }

  function deleteTask(id) {
    const updateTodo = [...task].filter((todo) => todo.id !== id);
    setTask(updateTodo);
  }

  function toggleComplete(id) {
    const updatedTasks = [...task].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTask(updatedTasks);
  }

  function saveEdits(id) {
    const editedTodo = [...task].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText
      }
      return todo
    })
    setTask(editedTodo)
    setEditingTodo(null)
    setEditingText("")
  }
  return (
    <>
      <div className="todo-wrapper">
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            value={todo}
            type="text"
            required
            onChange={(e) => setTodo(e.target.value)}
          />
          <span>
            <button
              type="submit"
              style={{ backgroundColor: "rgb(41, 139, 205)", color: "black" }}
            >
              Add Task
            </button>
          </span>
        </form>
        {task.map((todo) => (
          <div key={todo.id} className="todo-tasks">
            {editingTodo === todo.id ? (
              <input
                id="edit-input"
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
              />
            ) : (
              <>
                <input
                  checked={todo.completed}
                  type="checkbox"
                  onChange={() => toggleComplete(todo.id)}
                  style={{ cursor: "pointer", width:"25px" }}
                />
                <h4>{todo.text}</h4>
              </>
            )}

            {editingTodo === todo.id ? (
              <button
                onClick={() => saveEdits(todo.id)}
                style={{ backgroundColor: "lightgreen", color: "black" }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setEditingTodo(todo.id)}
                style={{ backgroundColor: "yellow", color: "black" }}
              >
                Edit
              </button>
            )}

            <button
              onClick={() => deleteTask(todo.id)}
              style={{ backgroundColor: "crimson", color: "black" }}
            >
              Delete
            </button>
            
          </div>
        ))}
      </div>
    </>
  );
}

export default Todo;
