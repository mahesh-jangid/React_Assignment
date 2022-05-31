import React from "react";
import { Button, Flex, Text, Wrap } from "@chakra-ui/react";
const Task = ({ task, dispatch }) => {
  return (
    <Flex justify={"space-between"} alignItems={"center"}>
      <Text style={{ textDecoration: task.complete ? "line-through" : null }}>
        {task.task}
      </Text>
      <Wrap>
        <Button
          colorScheme="green"
          onClick={() =>
            dispatch({
              type: "TOGGLE_TASK",
              payload: { id: task.id },
            })
          }
        >
          Toggle
        </Button>
        <Button
          colorScheme="red"
          onClick={() =>
            dispatch({
              type: "DELETE_TASK",
              payload: { id: task.id },
            })
          }
        >
          Delete
        </Button>
      </Wrap>
    </Flex>
  );
};

export default Task;
