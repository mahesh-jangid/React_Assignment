import React, { useReducer, useState } from "react";
import Task from "./components/Task";

import {
  Box,
  Container,
  Button,
  Flex,
  Input,
  Divider,
  useToast,
} from "@chakra-ui/react";

const reducer = (tasks, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [newTodo(action.payload.task), ...tasks];
    case "TOGGLE_TASK":
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });
    case "DELETE_TASK":
      return tasks.filter((task) => task.id !== action.payload.id);
    default:
      return tasks;
  }
};

const newTodo = (task) => {
  return {
    id: Date.now(),
    task: task,
    complete: false,
  };
};

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      return;
    } else {
      dispatch({ type: "ADD_TASK", payload: { task: task } });
      setTask("");
    }
  };

  return (
    <>
      <Container maxW="xl">
        <Box w="100%" p={6} border="1px solid pink" mt={20} minH={"70vh"}>
          <form onSubmit={handleSubmit}>
            <Flex>
              <Input
                isInvalid
                variant="flushed"
                errorBorderColor="crimson"
                placeholder="Enter Task"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              {/* 
              <Button type={"submit"} colorScheme="teal" variant="outline">
                Add Task
              </Button> */}
              <Button
                type={"submit"}
                colorScheme="teal"
                variant="outline"
                onClick={() =>
                  task
                    ? toast({
                        description: "Task Succesfully Added",
                        status: "success",
                        position: "top",
                        duration: 3000,
                        isClosable: true,
                      })
                    : toast({
                        description: "Please add atleast one Task",
                        status: "error",
                        position: "top",
                        duration: 2000,
                        isClosable: true,
                      })
                }
              >
                Add Task
              </Button>
            </Flex>
          </form>
          <Divider />
          <Divider />

          {tasks.map((task) => (
            <Box py={3} px={3} mt={3}>
              <Task key={task.id} task={task} dispatch={dispatch} />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
