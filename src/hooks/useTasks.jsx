import { useEffect, useState } from "react";
import _ from "lodash";

const initialData = [
  {
    _id: 1,
    title: "Client Review & Feedback",
    time: "Today 10:00 PM - 11:45 PM",
    order: 1,
    checked: false,
    category: "2020 goals",
  },
  {
    _id: 2,
    title: "Team Standup Meeting",
    time: "Tomorrow 9:00 AM - 10:00 AM",
    order: 2,
    checked: false,
    category: "work",
  },
  {
    _id: 3,
    title: "Project Brainstorming Session",
    time: "Wednesday 2:00 PM - 3:30 PM",
    order: 3,
    checked: true,
    category: "2020 goals",
  },
];

export function useTasks({ status = "all", category = "all" } = {}) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let filteredTasks = _.cloneDeep(initialData);

    // Filter by status
    if (status !== "all") {
      filteredTasks = filteredTasks.filter(
        (task) => status === "completed" && task.checked
      );
    }

    // Filter by category
    if (category !== "all") {
      filteredTasks = filteredTasks.filter(
        (task) => task.category === category
      );
    }

    // Order tasks based on their `order` field
    filteredTasks = filteredTasks.sort((a, b) => a.order - b.order);

    // send request to backend to check the task
    setTasks(filteredTasks);
  }, [status, category]);

  const handleTaskCheck = (isChecked, taskId) => {
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

  const handleTaskDelete = (taskIndex, taskId) => {
    const updatedTasks = _.cloneDeep(tasks);

    delete updatedTasks[taskIndex];

    setTasks(updatedTasks);

    console.log(taskId);
    // send request to backend to remove the task
  };

  return {
    tasks,
    handleTaskCheck,
    handleTaskDelete,
  };
}
