/* eslint-disable no-case-declarations */
import { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";
import demoTasks from "../_mock/demoTasks";

export function useTasks({ category }) {
  const isAuthenticated = localStorage.getItem("token");

  const [tasks, setTasks] = useState(isAuthenticated ? [] : demoTasks);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BASE_URL
          }api/tasks?category=${category}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setTasks(response.data.data);
      } catch (error) {
        console.log(error);
        localStorage.clear();
      }
    };

    fetchTasks();

    return () => {};
  }, [category]);

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
