import { Box, Typography, Fade } from "@mui/material";
import Task from "./task";

export function TasksList({ tasks, onCheck, handleTaskDelete, loading }) {
  const showNoTasksMessage = !loading && tasks && tasks.length === 0;

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
      {tasks && tasks.length > 0
        ? tasks.map((task, index) => (
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

      {/* Fade in the "No tasks" message when there are no tasks */}
      <Fade in={showNoTasksMessage} timeout={500}>
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
      </Fade>
    </Box>
  );
}
