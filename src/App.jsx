import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import SidebarItem from "./components/SideBar/SidebarItem";
import { FaRegCalendar, FaRegCheckCircle } from "react-icons/fa";
import { Layers } from "lucide-react";
import { useState } from "react";
import "./App.css";
import { TasksList } from "./components/tasks/taskList";
import { useTasks } from "./hooks/useTasks";
import { IconButton, TextField, Popover, Box } from "@mui/material";
import iconOptions from "./icons";

const initialPages = [
  {
    path: "/",
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

export default function App() {
  const [pages, setPages] = useState(initialPages);
  const [newItemName, setNewItemName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(iconOptions[0].icon);
  const [formVisible, setFormVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const addSidebarItem = () => {
    if (!newItemName.trim()) return; // Do nothing if name is empty
    const newItem = {
      path: `/new-${Date.now()}`,
      category: "new",
      sidebarItem: {
        icon: selectedIcon,
        text: newItemName,
      },
    };
    setPages([...pages, newItem]);
    setNewItemName("");
    setFormVisible(false);
  };

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (icon) => {
    setSelectedIcon(icon);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Inline styles
  const addNewItemStyle = {
    color: "#1d4ed8", // Blue text color
    cursor: "pointer",
    padding: "8px",
    fontSize: "16px",
    textAlign: "center",
    borderRadius: "4px",
    transition: "color 0.3s",
  };

  const addNewItemHoverStyle = {
    color: "#2563eb", // Darker blue on hover
  };

  const addButtonStyle = {
    backgroundColor: "#1d4ed8", // Blue background
    color: "white", // White text
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s, box-shadow 0.3s",
  };

  const addButtonHoverStyle = {
    backgroundColor: "#2563eb", // Darker blue on hover
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar>
          {pages.map((page, index) => (
            <div key={index}>
              <SidebarItem
                icon={page.sidebarItem.icon}
                text={page.sidebarItem.text}
                to={page.path}
                alert={page.sidebarItem.alert}
              />
              {index === 2 && <hr className="my-3" />}
            </div>
          ))}
          {!formVisible ? (
            <div
              onClick={() => setFormVisible(true)}
              style={addNewItemStyle}
              onMouseOver={(e) =>
                Object.assign(e.target.style, addNewItemHoverStyle)
              }
              onMouseOut={(e) => Object.assign(e.target.style, addNewItemStyle)}
            >
              Add New Item
            </div>
          ) : (
            <div className="p-4 flex items-center">
              <TextField
                placeholder="Enter item name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="border p-2 rounded w-full mr-2"
              />
              <IconButton onClick={handleIconClick} color="primary">
                {selectedIcon}
              </IconButton>
              <button
                onClick={addSidebarItem}
                style={addButtonStyle}
                onMouseOver={(e) =>
                  Object.assign(e.target.style, addButtonHoverStyle)
                }
                onMouseOut={(e) =>
                  Object.assign(e.target.style, addButtonStyle)
                }
              >
                Add
              </button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                PaperProps={{
                  style: {
                    width: "auto",
                    maxWidth: "none",
                    padding: "10px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    maxWidth: "300px",
                    maxHeight: "400px",
                    overflowY: "auto",
                  }}
                >
                  {iconOptions.map((option, index) => (
                    <IconButton
                      key={index}
                      onClick={() => handleMenuItemClick(option.icon)}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                      }}
                    >
                      {option.icon}
                    </IconButton>
                  ))}
                </Box>
              </Popover>
            </div>
          )}
        </Sidebar>

        <div className="flex-grow p-14">
          <Routes>
            {pages.map((page, index) => (
              <Route
                key={index}
                path={page.path}
                element={<DynamicPage category={page.category} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function DynamicPage({ category }) {
  const { tasks, handleTaskCheck, handleTaskDelete } = useTasks({
    category,
  });

  return (
    <TasksList
      tasks={tasks}
      onCheck={handleTaskCheck}
      handleTaskDelete={handleTaskDelete}
    />
  );
}
