import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./CreateTask.module.css";

export const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (!value) alert("Please Enter Task");
    else {
      const payload = {
        title: value,
        completed: false,
      };
      axios.post(`http://localhost:8080/todos`, payload);

      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        value={value}
        placeholder="Add a new task"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
