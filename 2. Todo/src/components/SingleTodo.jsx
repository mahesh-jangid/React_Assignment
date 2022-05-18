import React, { useState } from "react";
import styles from "./SingleTodo.module.css";

export const SingleTodo = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(todo.iscompleted);
  console.log(isCompleted);
  return (
    <div className={styles.singletodo} key={todo.key}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
          setIsCompleted(e.target.checked);
        }}
      />
      <p className={isCompleted ? styles.striked : ""}>{todo.value}</p>
      <button onClick={() => onDelete(todo.id)}>X</button>
    </div>
  );
};
