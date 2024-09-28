import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import axios from "axios";
import { Helmet } from "react-helmet"; // Import react-helmet
import { useNavigate } from "react-router-dom";

function LandingPage({ setShowRegister, setShowLogin }) {
  const navigate = useNavigate();

  const getUser = async () =>
    axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}api/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

  const handleAuthClick = async (showModalSetter) => {
    try {
      await getUser();
      navigate("/tasks");
    } catch (error) {
      showModalSetter(true);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Nawy - The Ultimate To-Do List App</title>
        <meta
          name="description"
          content="Nawy is the ultimate to-do list app that helps you stay organized and productive, designed to track your tasks and manage your day efficiently."
        />
        <meta
          name="keywords"
          content="to-do list app, task manager, productivity app, task management, Nawy, organize tasks, to-do, list, task manager, nawy"
        />
        <meta name="author" content="Nawy" />
        <meta
          property="og:title"
          content="Nawy - The Ultimate To-Do List App"
        />
        <meta
          property="og:description"
          content="Nawy is a to-do list app designed to help you organize your day and manage tasks efficiently."
        />
        <meta property="og:image" content="/landingPage.png" />
        <meta property="og:url" content="https://www.nawy-todo.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nawy - The Ultimate To-Do List App"
        />
        <meta
          name="twitter:description"
          content="Get organized and boost productivity with Nawy, the best to-do list app."
        />
        <meta name="twitter:image" content="/landingPage.png" />
      </Helmet>

      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: "#EFE6CD" }}>
        <Toolbar>
          <img
            src="./nawah-icon.svg"
            alt="Nawah Logo"
            style={{ marginRight: 10, width: 40, height: 40 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#333" }}
          ></Typography>
          <Button
            color="inherit"
            sx={{ color: "#333" }}
            onClick={() => handleAuthClick(setShowLogin)}
          >
            Login
          </Button>
          <Button
            color="inherit"
            sx={{ color: "#333" }}
            onClick={() => handleAuthClick(setShowRegister)}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "#f5f5f5", // Light grey background
          color: "black",
          py: 10,
          textAlign: "center",
          flexGrow: 1,
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Nawy
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Nawy is an Arabic word that means &quot;will do it&quot;—the
            ultimate to-do list app to keep you organized and on track.
          </Typography>
          <img
            src="/landingPage.png"
            alt="Nawy App"
            style={{
              width: "100%",
              maxWidth: 3000,
              margin: "20px auto",
              display: "block",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4 }}
            onClick={() => handleAuthClick(setShowRegister)}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Content Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Nawah is your go-to app for managing tasks efficiently. Whether
          you&apos;re planning your day, organizing projects, or just jotting
          down ideas, Nawah provides the best solutions to keep you productive.
        </Typography>
      </Container>

      {/* Sticky Footer */}
      <Box
        sx={{
          bgcolor: "#EFE6CD", // Matching the navbar color
          color: "white",
          py: 2,
          textAlign: "center",
          mt: "auto",
        }}
      >
        <Container>
          <Typography variant="body2" component="p" sx={{ color: "#333" }}>
            © 2024 Nawah. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default LandingPage;
