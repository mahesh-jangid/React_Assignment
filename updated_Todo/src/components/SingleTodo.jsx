import React, { useState } from "react";
import styles from "./SingleTodo.module.css";
import Todo from "./Todo";

export const SingleTodo = ({ task, index, completeTask, removeTask }) => {
  return (
    <div className={styles.task} id={task.completed ? styles.completed : ""}>
      <span style={{ marginRight: "16px" }}>{task.title}</span>
      <div>
        <button
          className={`removeTask ${styles.button}`}
          style={{ background: "red" }}
          onClick={() => removeTask(index, task.id)}
        >
          X
        </button>
        <button onClick={() => completeTask(index)}>Complete</button>
      </div>
    </div>
  );
};
