// components/RegisterModal.js
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  Link,
  Alert,
  Collapse, // Import Collapse
} from "@mui/material";
import { AccountCircle, Email, Lock } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";

const RegisterModal = ({ open, onClose, setShowLogin, setShowRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [generalError, setGeneralError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
    let newErrors = { name: "", email: "", password: "" };
    setGeneralError(""); // Reset general error before validation

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}api/user/register`,
          {
            email,
            name,
            password,
          }
        );
        onClose();
        setGeneralError("");
        window.location.reload();

        localStorage.setItem("token", response.data.data);
      } catch (error) {
        if (error?.response?.status === 409) {
          setGeneralError("This account already exists.");
        } else {
          setGeneralError("An unexpected error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
        setGeneralError("");
      }}
      PaperProps={{
        sx: {
          width: { xs: "90%", sm: "500px" }, // Responsive width
          maxWidth: "90vw",
        },
      }}
    >
      <DialogContent>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: 2, sm: 3 }, // Responsive padding
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
            Register
          </Typography>

          <Collapse in={!!generalError} sx={{ width: "100%" }}>
            <Alert severity="error" sx={{ mb: 2 }}>
              {generalError}
            </Alert>
          </Collapse>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              startAdornment: <AccountCircle sx={{ mr: 1 }} />,
            }}
            error={!!errors.name}
            helperText={errors.name}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setGeneralError("");
            }}
            InputProps={{
              startAdornment: <Email sx={{ mr: 1 }} />,
            }}
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: <Lock sx={{ mr: 1 }} />,
            }}
            error={!!errors.password}
            helperText={errors.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>

          <Button fullWidth variant="outlined" color="secondary" sx={{ mb: 2 }}>
            Continue as Guest
          </Button>

          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            Already a member?{" "}
            <Link
              sx={{ color: "blue", cursor: "pointer", textDecoration: "none" }}
              onClick={() => {
                setShowLogin(true);
                setShowRegister(false);
              }}
            >
              Click here
            </Link>
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterModal;
