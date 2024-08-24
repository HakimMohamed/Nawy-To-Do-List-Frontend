import { useEffect, useRef, useState } from "react";
import axios from "axios";
import demoTasks from "../_mock/demoTasks";

export function useTasks({ category = "", setShowRegister }) {
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const prevCategoryRef = useRef(category);

  useEffect(() => {
    const fetchTasks = async () => {
      if (prevCategoryRef.current !== category) {
        setTasks([]);
        prevCategoryRef.current = category; // Update the ref with the new category
      }

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
        setTasks(response.data.data); // Ensure this data includes the newly added task
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 401) {
          // Handle unauthorized access
          const filteredDemoTasks = demoTasks.filter((task) => {
            switch (category) {
              case "completed":
                return task.checked;

              case "today": {
                const today = new Date();
                const taskDate = new Date(task.createdAt);
                return (
                  taskDate.getDate() === today.getDate() &&
                  taskDate.getMonth() === today.getMonth() &&
                  taskDate.getFullYear() === today.getFullYear()
                );
              }

              default:
                return task;
            }
          });
          setTasks(filteredDemoTasks);
          localStorage.clear(); // Clear local storage on unauthorized access
        } else {
          console.error("Failed to fetch tasks:", error);
        }
      }
    };

    fetchTasks();

    return () => {
      // Cleanup function (optional)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, refresh]);
  const handleTaskCheck = async (isChecked, taskId) => {
    try {
      await axios.patch(
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
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setShowRegister(true);
      }
    }
  };

  const addTask = async (title) => {
    if (title.trim() === "") {
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}api/task`,
        { title },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRefresh(refresh + 1);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleTaskDelete = async (taskId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}api/task?taskId=${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRefresh(refresh + 1);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return {
    tasks,
    handleTaskCheck,
    handleTaskDelete,
    addTask,
  };
}
