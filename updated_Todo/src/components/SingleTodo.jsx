import React, { useState } from "react";
import styles from "./SingleTodo.module.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const SingleTodo = ({ task, index, completeTask, removeTask }) => {
  return (
    <Card className="bg-dark">
      <div className={styles.task} id={task.completed ? styles.completed : ""}>
        <span style={{ marginRight: "16px" }}>{task.title}</span>
        <div className={styles.btns}>
          <Button variant="outline-success" onClick={() => completeTask(index)}>
            Complete
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => removeTask(index, task.id)}
          >
            ✕
          </Button>
        </div>
      </div>
    </Card>
  );
};
