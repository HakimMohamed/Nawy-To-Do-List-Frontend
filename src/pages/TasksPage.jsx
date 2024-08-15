import { useState } from "react";
import CustomCard from "../components/tasks/task";
import { Box } from "@mui/material";
import _ from "lodash";

const initialData = [
  {
    _id: 1,
    title: "Client Review & Feedback",
    time: "Today 10:00 PM - 11:45 PM",
    order: 1,
    checked: false,
  },
  {
    _id: 2,
    title: "Team Standup Meeting",
    time: "Tomorrow 9:00 AM - 10:00 AM",
    order: 2,
    checked: false,
  },
  {
    _id: 3,
    title: "Project Brainstorming Session",
    time: "Wednesday 2:00 PM - 3:30 PM",
    order: 3,
    checked: false,
  },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialData);

  const handleTaskCheck = (event, taskId) => {
    const isChecked = event.target.checked;
    const updatedTaskIndex = tasks.findIndex((t) => t._id === taskId);
    const latestCheckedIndex = tasks.filter((t) => !t.checked);

    const updatedTasks = _.cloneDeep(tasks);

    updatedTasks[updatedTaskIndex].order = latestCheckedIndex.length;

    updatedTasks[updatedTaskIndex].checked = isChecked;

    const orderedTasks = updatedTasks
      .map((task, index) => {
        if (task._id !== taskId) {
          return {
            ...task,
            order:
              index === updatedTasks[updatedTaskIndex].order
                ? updatedTasks[updatedTaskIndex].order + 1
                : index,
            checked: task._id === taskId ? isChecked : task.checked,
          };
        }

        return task;
      })
      .sort((a, b) => a.order - b.order);

    setTasks(orderedTasks);
  };

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
          <CustomCard
            key={task._id}
            _id={task._id}
            title={task.title}
            time={task.time}
            isChecked={task.checked}
            onCheck={handleTaskCheck}
            index={task.order}
          />
        ))}
    </Box>
  );
}
