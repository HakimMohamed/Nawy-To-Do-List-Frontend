import { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Box,
  IconButton,
  Checkbox,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskComponent = ({
  _id,
  title,
  createdAt,
  isChecked,
  onCheck,
  handleTaskDelete,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuPosition, setMenuPosition] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const handleToggleCompletion = () => {
    onCheck(!isChecked, _id);
    handleMenuClose();
  };

  const handleMenuOpen = (event) => {
    event.preventDefault();

    // Close the menu if it's already open, then reopen it
    if (anchorEl) {
      setAnchorEl(null);
      setMenuPosition(null);

      // Delay opening the menu slightly to ensure it closes first
      setTimeout(() => {
        setMenuPosition({ mouseX: event.clientX, mouseY: event.clientY });
        setAnchorEl(event.currentTarget);
      }, 0);
    } else {
      // Open the menu if it's not already open
      setMenuPosition({ mouseX: event.clientX, mouseY: event.clientY });
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuPosition(null); // Reset menu position
  };

  const handleDelete = () => {
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleConfirmDelete = () => {
    handleTaskDelete(index);
    setOpenDialog(false);
  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
  };

  const handleDoubleClick = () => {
    onCheck(!isChecked, _id);
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          width: "100%",
          maxWidth: "1500px",
          borderRadius: 8,
          boxShadow: "none",
          border: "1px solid #e0e0e0",
          margin: "0 auto",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          backgroundColor: isChecked ? "#f0f0f0" : "none",
          mb: 2,
          overflow: "hidden",
          "@media (max-width: 600px)": {
            p: 1,
          },
          "&:hover": {
            backgroundColor: "#f0f0f0",
            transform: "scale(1.02)",
          },
        }}
        onContextMenu={handleMenuOpen} // Add right-click menu opening
        onDoubleClick={handleDoubleClick} // Handle double-click for toggle completion
      >
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Checkbox
            icon={
              <CircleIcon
                sx={{
                  color: "white",
                  backgroundColor: "grey",
                  borderRadius: "50%",
                }}
              />
            }
            checkedIcon={<CheckCircleIcon />}
            sx={{
              mr: 1,
              width: "24px",
              height: "24px",
              padding: 0,
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }}
            checked={isChecked}
            onChange={handleToggleCompletion}
          />

          <Typography
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
              color: isChecked ? "grey" : "inherit",
              textDecoration: isChecked ? "line-through" : "none",
              "@media (max-width: 600px)": {
                fontSize: "0.875rem",
              },
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "16px",
              p: "4px 8px",
              mr: 2,
              "@media (max-width: 600px)": {
                p: "4px 8px",
                backgroundColor: "#f5f5f5",
                borderRadius: "16px",
                flexGrow: 1,
                justifyContent: "center",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: "0.75rem",
                color: "#757575",
                "@media (max-width: 600px)": {
                  fontSize: "0.625rem",
                },
              }}
            >
              {new Date(createdAt).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={handleMenuOpen}
            sx={{
              "@media (max-width: 600px)": {
                p: "4px",
              },
            }}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Menu
          anchorReference="anchorPosition"
          anchorPosition={
            menuPosition !== null
              ? { top: menuPosition.mouseY, left: menuPosition.mouseX }
              : undefined
          }
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            "& .MuiMenu-paper": {
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              minWidth: "160px",
              mt: 1,
            },
          }}
        >
          <MenuItem onClick={handleToggleCompletion}>
            <ListItemIcon>
              <CheckCircleIcon color={isChecked ? "disabled" : "primary"} />
            </ListItemIcon>
            <ListItemText
              primary={
                isChecked ? "Mark as Not Completed" : "Mark as Completed"
              }
            />
          </MenuItem>
          <Divider sx={{ my: 1 }} />
          <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
            <ListItemIcon>
              <DeleteIcon sx={{ color: "error.main" }} />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </MenuItem>
        </Menu>
      </Card>

      <Dialog open={openDialog} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this task?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskComponent;
