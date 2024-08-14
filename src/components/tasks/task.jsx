import {
  Card,
  CardContent,
  Typography,
  Box,
  //   Avatar,
  AvatarGroup,
  IconButton,
  Avatar,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CustomCard = ({ title, time, participants }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        minWidth: 600,
        maxWidth: 1500,
        borderRadius: 8,
      }}
    >
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="h6" sx={{ textDecoration: "line-through" }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {time}
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
        <AvatarGroup max={2}>
          {participants.map((participant, index) => (
            <Avatar key={index} alt={participant.name} src={participant.src} />
          ))}
        </AvatarGroup>
        <IconButton color="primary">
          <CheckCircleIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CustomCard;
