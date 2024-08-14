import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

export default function HelpPage() {
  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          backgroundColor: "white",
          width: "50vw",
          md: "50vw",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          mx: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="label"
            htmlFor="title"
            sx={{ display: "block", color: "gray", fontWeight: "bold", mb: 1 }}
          >
            Topic
          </Typography>
          <TextField
            id="title"
            placeholder="Enter title"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                "&::placeholder": {
                  color: "text.primary",
                  opacity: 1,
                },
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
              },
            }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="label"
            htmlFor="content"
            sx={{ display: "block", color: "gray", fontWeight: "bold", mb: 1 }}
          >
            Content
          </Typography>
          <TextField
            id="content"
            placeholder="Enter your content"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                "&::placeholder": {
                  color: "text.primary",
                  opacity: 1,
                },
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "blue",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "darkblue",
              },
            }}
          >
            Post
          </Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="photo">
              <PhotoCamera sx={{ color: "gray" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
