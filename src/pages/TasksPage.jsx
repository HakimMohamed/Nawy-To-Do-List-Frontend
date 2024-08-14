import CustomCard from "../components/tasks/task";
const mockData = {
  title: "Client Review & Feedback",
  time: "Today 10:00 PM - 11:45 PM",
  participants: [
    { name: "Person 1", src: "https://via.placeholder.com/40" },
    { name: "Person 2", src: "https://via.placeholder.com/40" },
  ],
};

export default function TasksPage() {
  return (
    <div>
      <CustomCard
        title={mockData.title}
        time={mockData.time}
        participants={mockData.participants}
      />
    </div>
  );
}
