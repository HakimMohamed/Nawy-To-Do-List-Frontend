import { useEffect, useState } from "react";
import { Card, Typography, Box, IconButton, Checkbox } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CustomCard = ({ title, time, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        width: "100%",
        maxWidth: "1200px",
        borderRadius: 8,
        boxShadow: "none",
        border: "1px solid #e0e0e0",
        margin: "0 auto",
        height: "72px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        mb: 2,
        "@media (max-width: 600px)": {
          p: 1,
          height: "72px",
        },
        "&:hover": {
          backgroundColor: "#f0f0f0",
          transform: "scale(1.02)",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <Checkbox sx={{ mr: 1 }} />
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
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
            {time}
          </Typography>
        </Box>
        <IconButton
          size="small"
          sx={{
            "@media (max-width: 600px)": {
              p: "4px",
            },
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CustomCard;
