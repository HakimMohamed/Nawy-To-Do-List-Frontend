const demoData = [
  {
    _id: 1,
    title: "Client Review & Feedback",
    createdAt: new Date(),
    order: 1,
    checked: false,
    category: "2020 goals",
  },
  {
    _id: 2,
    title: "Team Standup Meeting",
    createdAt: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    order: 2,
    checked: false,
    category: "work",
  },
  {
    _id: 4,
    title: "Design Review Meeting",
    createdAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    order: 3,
    checked: true,
    category: "design",
  },
];

export default demoData;
