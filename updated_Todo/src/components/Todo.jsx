import { useState, useEffect } from "react";
import React from "react";
import { SingleTodo } from "./SingleTodo";
import styles from "./Todo.module.css";
import { CreateTask } from "./CreateTask";
import axios from "axios";
import { Button } from "react-bootstrap";

const Todo = () => {
  const [tasksRemain, setTasksRemain] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [TotalTask, setTotalTask] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const handlePage = (value) => {
    setPage(page + value);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/todos").then((response) => {
      console.log(response.data);
      setTotalTask(response.data.length);
    });
  }, []);
  useEffect(() => {
    async function getTodo() {
      axios
        .get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
        .then((response) => {
          // console.log(response);
          setTasks(response.data);
          setTotalCount(Number(response.headers["x-total-count"]));
        });
    }
    getTodo();
  }, [page, limit]);

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
        Pending Tasks ({tasksRemain}) Out Of ({TotalTask})
      </div>
      <div className="create-task">
        <CreateTask page={page} />
      </div>
      <div className={styles.limit}>
        <select
          className={styles.select}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option defaultValue="Select limit value">Select limit</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <SingleTodo
            task={task}
            tasks={tasks}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      <div className="paginate">
        <Button
          variant="outline-primary"
          disabled={page <= 1}
          onClick={() => handlePage(-1)}
        >
          Prev
        </Button>
        <Button
          variant="outline-primary"
          disabled={totalCount < page * limit}
          onClick={() => handlePage(+1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default Todo;
