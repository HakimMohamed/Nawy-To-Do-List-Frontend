import { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";
import demoTasks from "../_mock/demoTasks";

export function useTasks({ category, setShowRegister }) {
  // Accept setShowLogin as a parameter
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setTasks([]);
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

        if (error.response.status === 401) {
          const filteredDemoTasks = demoTasks.filter((task) => {
            switch (category) {
              case "completed":
                return task.checked;

              case "today":
                // eslint-disable-next-line no-case-declarations
                const today = new Date();
                // eslint-disable-next-line no-case-declarations
                const taskDate = new Date(task.createdAt);
                return (
                  taskDate.getDate() === today.getDate() &&
                  taskDate.getMonth() === today.getMonth() &&
                  taskDate.getFullYear() === today.getFullYear()
                );

              default:
                return task;
            }
          });
          setTasks(filteredDemoTasks);
          localStorage.clear();
        }
      }
    };

    fetchTasks();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, refresh]);

  const handleTaskCheck = async (isChecked, taskId) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}api/task?taskId=${taskId}`,
        {
          checked: isChecked,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRefresh(refresh + 1);
      setTasks(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setShowRegister(true);
      }
    }
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
