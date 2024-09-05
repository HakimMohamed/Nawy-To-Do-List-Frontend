import { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SidebarContext } from "./Sidebar";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

export default function SidebarItem({
  categoryId,
  icon,
  text,
  to,
  alert,
  removePage,
  onRename,
}) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const isActive = location.pathname === to;

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const navigate = useNavigate();

  const isProtected = categoryId === 1 || categoryId === 2 || categoryId === 3;

  useEffect(() => {
    if (!expanded) {
      setIsEditing(false);
    }
  }, [expanded]);

  const handleDeleteClick = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = async () => {
    setOpen(false);
    if (location.pathname === to) {
      navigate("/tasks"); // Redirect to tasks
    }
    try {
      await removePage(categoryId);
    } catch (error) {
      console.error("Error Deleting Category:", error);
    }
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setNewText(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);

      try {
        await onRename(newText);
        console.log("Name saved:", newText);
      } catch (error) {
        console.error("Error saving name:", error);
      }
    }
  };

  return (
    <>
      <Link to={to}>
        <li
          className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
            isActive
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }`}
        >
          <div className="flex items-center justify-center">{icon}</div>

          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="ml-3 w-40 px-2 py-1 border border-gray-300 rounded focus:outline-none"
              autoFocus
            />
          ) : (
            <span
              className={`overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              {text}
            </span>
          )}

          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                expanded ? "" : "top-2"
              }`}
            ></div>
          )}

          {!expanded && !isEditing && (
            <div
              className={`absolute left-full rounded-md px-2 py-1 ml-6 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 bg-white border border-indigo-200`}
            >
              {text}
            </div>
          )}

          {/* Only show icons if the sidebar is expanded */}
          {expanded && !isEditing && (
            <div className="absolute right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Hide or disable edit and delete for protected category IDs */}
              {!isProtected && (
                <>
                  <FaPen
                    className="text-gray-500 hover:text-blue-500 cursor-pointer"
                    onClick={handleEditClick}
                  />
                  <FaTrashAlt
                    className="text-gray-500 hover:text-red-500 cursor-pointer"
                    onClick={handleDeleteClick}
                  />
                </>
              )}
            </div>
          )}
        </li>
      </Link>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Category?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By deleting this category, you will delete all tasks associated with
            it. Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
