import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { AccountCircle, Email, Lock } from "@mui/icons-material";

const RegisterForm = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Name"
          autoComplete="name"
          InputProps={{
            startAdornment: <AccountCircle sx={{ mr: 1 }} />,
          }}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          autoComplete="email"
          InputProps={{
            startAdornment: <Email sx={{ mr: 1 }} />,
          }}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          autoComplete="new-password"
          InputProps={{
            startAdornment: <Lock sx={{ mr: 1 }} />,
          }}
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
      </Box>
    </Container>
  );
};

export default RegisterForm;
