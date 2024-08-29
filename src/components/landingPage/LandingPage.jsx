import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

function LandingPage({ setShowRegister, setShowLogin }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
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
            onClick={() => setShowLogin(true)}
          >
            Login
          </Button>
          <Button
            color="inherit"
            sx={{ color: "#333" }}
            onClick={() => setShowRegister(true)}
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
            Welcome to Nawah
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            The ultimate to-do list app to keep you organized and on track.
          </Typography>
          <img
            src="/landingPage.png"
            alt="Nawah App"
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
