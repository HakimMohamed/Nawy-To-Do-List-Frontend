import { useEffect, useRef, useState } from "react";
import axios from "axios";

export function useTasks({ category = "", setShowRegister, categoryId }) {
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const prevCategoryRef = useRef(category);

  useEffect(() => {
    const fetchTasks = async () => {
      if (prevCategoryRef.current !== category) {
        setTasks([]);
        prevCategoryRef.current = category;
      }

      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BASE_URL
          }api/tasks?category=${category}&categoryId=${categoryId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setTasks(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();

    return () => {};
  }, [category, refresh, categoryId]);
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
        {
          title,
          _category: [1, 2, 3].includes(categoryId) ? undefined : categoryId,
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
