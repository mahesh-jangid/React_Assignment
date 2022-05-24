import { useState, useEffect } from "react";
import React from "react";
import { SingleTodo } from "./SingleTodo";
import styles from "./Todo.module.css";
import { CreateTask } from "./CreateTask";
import axios from "axios";

const Todo = () => {
  const [tasksRemain, setTasksRemain] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(0);

  const handlePage = (value) => {
    setPage(page + value);
  };
  useEffect(() => {
    async function getTodo() {
      const response = await fetch(
        `http://localhost:8080/todos?_page=${page}&_limit=5`
      );
      const data = await response.json();
      console.log(data);
      setTasks(data);
    }
    getTodo();
  }, [page]);

  useEffect(() => {
    setTasksRemain(tasks.filter((task) => !task.completed).length);
  });

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index, id) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    axios.delete(`http://localhost:8080/todos/${id}`);
    setTasks(newTasks);
  };

  return (
    <div className={styles.todo_container}>
      <div className={styles.header}>
        Pending Tasks ({tasksRemain}) Out Of ({tasks.length})
      </div>
      <div className="create-task">
        <CreateTask page={page} />
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <SingleTodo
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      <div className="paginate">
        <button onClick={() => handlePage(-1)}>Prev</button>
        <button onClick={() => handlePage(+1)}>Next</button>
      </div>
    </div>
  );
};
export default Todo;
