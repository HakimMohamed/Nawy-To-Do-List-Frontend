import CustomCard from "../components/tasks/task";
import { Box } from "@mui/material";

const mockData = [
  {
    title: "Client Review & Feedback",
    time: "Today 10:00 PM - 11:45 PM",
    participants: [
      { name: "Person 1", src: "https://via.placeholder.com/40" },
      { name: "Person 2", src: "https://via.placeholder.com/40" },
    ],
  },
  {
    title: "Team Standup Meeting",
    time: "Tomorrow 9:00 AM - 10:00 AM",
    participants: [
      { name: "Person 3", src: "https://via.placeholder.com/40" },
      { name: "Person 4", src: "https://via.placeholder.com/40" },
    ],
  },
  {
    title: "Project Brainstorming Session",
    time: "Wednesday 2:00 PM - 3:30 PM",
    participants: [
      { name: "Person 5", src: "https://via.placeholder.com/40" },
      { name: "Person 6", src: "https://via.placeholder.com/40" },
    ],
  },
];

export default function TasksPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
      }}
    >
      {mockData.map((data, index) => (
        <CustomCard
          key={index}
          title={data.title}
          time={data.time}
          participants={data.participants}
          index={index}
        />
      ))}
    </Box>
  );
}
