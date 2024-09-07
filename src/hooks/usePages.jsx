import { useEffect, useState } from "react";
import { FaRegCalendar, FaRegCheckCircle } from "react-icons/fa";
import { Layers } from "lucide-react";
import axios from "axios";
import iconOptions from "../icons";

const initialPages = [
  {
    _id: 1,
    path: "/today",
    category: "today",
    icon: <FaRegCalendar size={20} />,
    text: "Today",
    alert: true,
  },
  {
    _id: 2,
    path: "/completed",
    category: "completed",
    icon: <FaRegCheckCircle size={20} />,
    text: "Completed",
  },
  {
    _id: 3,
    path: "/tasks",
    category: "all",
    icon: <Layers size={20} />,
    text: "Tasks",
  },
];

export const usePages = () => {
  const [pages, setPages] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(0);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}api/categories`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const fetchedPages = response.data.data;

        if (fetchedPages && fetchedPages.length > 0) {
          fetchedPages.forEach((page) => {
            page.icon = iconOptions[page.icon.id].icon;
          });
        }

        setPages([...initialPages, ...fetchedPages]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPages();
    return () => {};
  }, [triggerFetch]);

  const addPage = async ({ path, category, icon, text }) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}api/category`,
        { path, category, icon, text },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTriggerFetch((prev) => prev + 1);
    } catch (err) {
      if (err?.response?.status === 409) {
        throw new Error("Category already exists.");
      }
      if (err?.response?.status === 400) {
        throw new Error("Must Provide Category Text.");
      }
    }
  };

  const removePage = async ({ categoryId }) => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }api/category?categoryId=${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTriggerFetch((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }
  };

  const updatePage = async ({ categoryId, path, category, icon, text }) => {
    try {
      await axios.patch(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }api/category?categoryId=${categoryId}`,
        { categoryId, path, category, icon, text },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTriggerFetch((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    pages,
    addPage,
    removePage,
    updatePage,
    fetchPages: setTriggerFetch,
  };
};
