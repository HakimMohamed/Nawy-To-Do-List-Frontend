import { Box } from "@mui/material";
import Task from "./task";

export function TasksList({ tasks, onCheck }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
      }}
    >
      {tasks
        .sort((a, b) => a.order - b.order)
        .map((task) => (
          <Task
            key={task._id}
            _id={task._id}
            title={task.title}
            time={task.time}
            isChecked={task.checked}
            onCheck={onCheck}
            index={task.order}
          />
        ))}
    </Box>
  );
}
