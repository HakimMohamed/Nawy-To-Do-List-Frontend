import React, { createContext, useState, useRef, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import {
  Menu,
  MenuItem,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  ListItemIcon,
  Typography,
  Popover,
  Box,
  TextField,
} from "@mui/material";
import { Settings, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import iconOptions from "../../icons";
import axios from "axios";

const SidebarContext = createContext();

export default function Sidebar({ children, addPage, pages }) {
  const sidebarRef = useRef(null);
  const childrenArray = React.Children.toArray(children);
  const firstPart = childrenArray.slice(0, childrenArray.length);
  const remainingPart = childrenArray.slice(childrenArray.length);
  const [expanded, setExpanded] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(iconOptions[0].icon);
  const [formVisible, setFormVisible] = useState(false);
  const [anchorElForm, setFormAnchor] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const addSidebarItem = () => {
    if (!newItemName.trim()) return;

    const isDuplicated = pages.find(
      (p) => p.sidebarItem.text.toLowerCase() === newItemName.toLowerCase()
    );
    if (isDuplicated) {
      setErrorMessage("Error: Category already exists.");
      return;
    }

    const newItem = {
      path: `/${newItemName.split(" ").join("")}`,
      category: newItemName,
      sidebarItem: {
        icon: selectedIcon,
        text: newItemName,
      },
    };

    addPage(newItem);
    setNewItemName("");
    setFormVisible(false);
    setErrorMessage("");
  };

  const handleIconClick = (event) => {
    setFormAnchor(event.currentTarget);
  };

  const handleMenuItemClick = (icon) => {
    setSelectedIcon(icon);
    setFormAnchor(null);
  };

  const open = Boolean(anchorElForm);
  const id = open ? "simple-popover" : undefined;

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

  // Collapse sidebar on smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1600) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOutClick = () => {
    setAnchorEl(null);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleLogOutConfirm = () => {
    localStorage.clear();
    setDialogOpen(false);
    navigate("/");
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}api/user`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();

    return () => {};
  }, []);

  const renderForm = () => {
    return !formVisible ? (
      <div
        onClick={() => setFormVisible(true)}
        style={addNewItemStyle}
        onMouseOver={(e) => Object.assign(e.target.style, addNewItemHoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, addNewItemStyle)}
      >
        + New Collection
      </div>
    ) : (
      <div>
        <div className="p-2 flex flex-col items-start" style={{ gap: "4px" }}>
          <TextField
            placeholder="Enter Collection Name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="border p-2 rounded w-full"
            style={{ marginBottom: "24px", maxWidth: "200px" }}
            autoComplete="off"
          />

          <div
            className="flex items-center w-full"
            style={{ marginBottom: "24px" }}
          >
            {" "}
            <IconButton onClick={handleIconClick} color="primary">
              {selectedIcon}
            </IconButton>
            <button
              onClick={addSidebarItem}
              style={addButtonStyle}
              onMouseOver={(e) =>
                Object.assign(e.target.style, addButtonHoverStyle)
              }
              onMouseOut={(e) => Object.assign(e.target.style, addButtonStyle)}
              className="ml-3"
            >
              Add
            </button>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorElForm}
            onClose={() => setFormAnchor(null)}
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

        {errorMessage && (
          <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
        )}
      </div>
    );
  };

  return (
    <aside
      ref={sidebarRef}
      onMouseLeave={() => {
        if (window.innerWidth <= 1600) {
          setExpanded(false);
        }
      }}
      onClick={() => setExpanded(true)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        overflowY: "auto",
        backgroundColor: "white",
        zIndex: 1000,
        overflow: "visible",
        borderRight: "1px solid #e0e0e0",
        transition: "width 0.3s",
      }}
    >
      <nav className="h-full flex flex-col bg-white shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <button
            onClick={() => {
              setExpanded(!expanded);
              setFormVisible(false);
            }}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <img
              src="./nawah-icon.svg"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-8"
              }`}
              alt="Nawah Icon"
            />
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            {firstPart}
            {expanded && renderForm()}
            {remainingPart}
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src={"./vite.svg"}
            className="w-10 h-10 rounded-md"
            alt="User Icon"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{user?.name || "Name"}</h4>
              <span className="text-xs text-gray-600">
                {user?.email || "email@example.com"}
              </span>
            </div>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertical size={20} />
            </IconButton>
          </div>
        </div>
      </nav>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Settings</Typography>
        </MenuItem>
        <MenuItem
          onClick={handleLogOutClick}
          sx={{
            color: "red",
            "&:hover": {
              backgroundColor: "#ffe6e6",
            },
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "red" }} />
          </ListItemIcon>
          <Typography variant="inherit">Log Out</Typography>
        </MenuItem>
      </Menu>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to log out?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will log you out of your account.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleLogOutConfirm}
            variant="contained"
            color="error"
            autoFocus
          >
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    </aside>
  );
}

export { SidebarContext };
