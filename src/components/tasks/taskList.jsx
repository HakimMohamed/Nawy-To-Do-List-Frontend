import { Box, Typography } from "@mui/material";
import Task from "./task";

export function TasksList({ tasks, onCheck, handleTaskDelete }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        alignItems: "center", // Center the content
      }}
    >
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
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
      ) : (
        <Box
          sx={{
            textAlign: "center",
            p: 4,
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
            boxShadow: 22,
          }}
        >
          <Typography variant="h6" color="textSecondary">
            No tasks yet!
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
            Start adding your tasks and stay organized.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
