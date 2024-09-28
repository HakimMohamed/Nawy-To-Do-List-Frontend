// components/LoginModal.js
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  Alert,
  Collapse,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material"; // Correct import for the icons
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginModal = ({ open, onClose, setShowLogin, setShowRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
    let newErrors = { email: "", password: "" };
    setGeneralError(""); // Reset general error before validation

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
          `${import.meta.env.VITE_REACT_APP_BASE_URL}api/user/login`,
          {
            email,
            password,
          }
        );
        onClose();
        navigate("/today");
        localStorage.setItem("token", response.data.data);
      } catch (error) {
        if (error?.response?.status === 404) {
          setGeneralError("This account does not exist.");
        } else if (error?.response?.status === 403) {
          setGeneralError("Either password or email is incorrect.");
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
        setGeneralError("");
        onClose();
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
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>

          <Collapse in={!!generalError}>
            <Alert severity="error" sx={{ mb: 2 }}>
              {generalError}
            </Alert>
          </Collapse>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            Login
          </Button>
          {/* 
          <Button fullWidth variant="outlined" color="secondary" sx={{ mb: 2 }}>
            Continue as Guest
          </Button> */}

          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            Don&apos;t have an account?{" "}
            <Link
              style={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "none",
              }}
              onClick={() => {
                setShowLogin(false);
                setShowRegister(true);
              }}
            >
              Register here
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

export default LoginModal;
