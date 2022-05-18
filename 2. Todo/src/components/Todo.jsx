import { useState } from "react";
import React from "react";
import { SingleTodo } from "./SingleTodo";
import styles from "./Todo.module.css";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <h3>TODO</h3>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
      <button
        className={styles.add_btn}
        onClick={() => {
          setTodos([
            ...todos,
            { id: Date.now(), value: value, IsCompleted: false },
          ]);
          setValue("");
        }}
      >
        +
      </button>
      <div className={styles.todo_list}>
        {todos.map((todo) => (
          <>
            <SingleTodo key={todo.id} todo={todo} onDelete={deleteTodo} />
          </>
        ))}
      </div>
    </div>
  );
};
export default Todo;
