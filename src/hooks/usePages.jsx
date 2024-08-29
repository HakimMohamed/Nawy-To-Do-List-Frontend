import { useState } from "react";
import { FaRegCalendar, FaRegCheckCircle } from "react-icons/fa";
import { Layers } from "lucide-react";

const initialPages = [
  {
    path: "/today",
    category: "today",
    sidebarItem: {
      icon: <FaRegCalendar size={20} />,
      text: "Today",
      alert: true,
    },
  },
  {
    path: "/completed",
    category: "completed",
    sidebarItem: {
      icon: <FaRegCheckCircle size={20} />,
      text: "Completed",
    },
  },
  {
    path: "/tasks",
    category: "all",
    sidebarItem: {
      icon: <Layers size={20} />,
      text: "Tasks",
    },
  },
];

export const usePages = () => {
  const [pages, setPages] = useState(initialPages);

  const addPage = (newPage) => {
    setPages((prevPages) => [...prevPages, newPage]);
  };

  return { pages, addPage };
};
