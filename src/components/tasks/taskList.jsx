import { Box } from "@mui/material";
import Task from "./task";

export function TasksList({ tasks, onCheck, handleTaskDelete }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
      }}
    >
      {tasks && tasks.length && tasks.length > 0
        ? tasks
            .sort((a, b) => a.order - b.order)
            .map((task, index) => (
              <Task
                key={task._id}
                _id={task._id}
                title={task.title}
                createdAt={task.createdAt}
                isChecked={task.checked}
                onCheck={onCheck}
                index={index}
                handleTaskDelete={handleTaskDelete}
              />
            ))
        : null}
    </Box>
  );
}
