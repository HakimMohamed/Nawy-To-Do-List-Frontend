/* eslint-disable no-case-declarations */
import { useEffect, useState } from "react";
import _ from "lodash";
const initialData = [
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
    checked: false,
    category: "design",
  },
  {
    _id: 6,
    title: "Quarterly Financial Review",
    createdAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    order: 4,
    checked: false,
    category: "finance",
  },
  {
    _id: 7,
    title: "Client Onboarding Session",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    order: 5,
    checked: false,
    category: "client",
  },
  {
    _id: 9,
    title: "Marketing Campaign Strategy",
    createdAt: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000),
    order: 6,
    checked: false,
    category: "marketing",
  },
  {
    _id: 11,
    title: "Product Roadmap Review",
    createdAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    order: 11,
    checked: false,
    category: "development",
  },
  {
    _id: 12,
    title: "Team Building Activity",
    createdAt: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    order: 12,
    checked: false,
    category: "work",
  },
  {
    _id: 13,
    title: "Customer Satisfaction Survey",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    order: 13,
    checked: false,
    category: "client",
  },
  {
    _id: 14,
    title: "Financial Forecasting",
    createdAt: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    order: 14,
    checked: false,
    category: "finance",
  },
  {
    _id: 15,
    title: "Competitor Analysis",
    createdAt: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
    order: 15,
    checked: false,
    category: "marketing",
  },
  {
    _id: 16,
    title: "Design Sprint Planning",
    createdAt: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000),
    order: 16,
    checked: false,
    category: "design",
  },
  {
    _id: 17,
    title: "Sales Strategy Meeting",
    createdAt: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000),
    order: 17,
    checked: false,
    category: "work",
  },
  {
    _id: 18,
    title: "New Product Training",
    createdAt: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
    order: 18,
    checked: false,
    category: "development",
  },
  {
    _id: 19,
    title: "Client Contract Renewal",
    createdAt: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000),
    order: 19,
    checked: false,
    category: "client",
  },
  {
    _id: 20,
    title: "Annual Review Preparation",
    createdAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    order: 20,
    checked: false,
    category: "finance",
  },
  {
    _id: 3,
    title: "Project Brainstorming Session",
    createdAt: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    order: 7,
    checked: true,
    category: "2020 goals",
  },
  {
    _id: 5,
    title: "Product Launch Planning",
    createdAt: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    order: 8,
    checked: true,
    category: "marketing",
  },
  {
    _id: 10,
    title: "Website Redesign Discussion",
    createdAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    order: 10,
    checked: true,
    category: "design",
  },
  {
    _id: 21,
    title: "Update Marketing Materials",
    createdAt: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000),
    order: 21,
    checked: true,
    category: "marketing",
  },
  {
    _id: 22,
    title: "Website Performance Review",
    createdAt: new Date(Date.now() + 22 * 24 * 60 * 60 * 1000),
    order: 22,
    checked: true,
    category: "design",
  },
  {
    _id: 23,
    title: "New Feature QA Testing",
    createdAt: new Date(Date.now() + 23 * 24 * 60 * 60 * 1000),
    order: 23,
    checked: true,
    category: "development",
  },
  {
    _id: 24,
    title: "Budget Allocation Review",
    createdAt: new Date(Date.now() + 24 * 24 * 60 * 60 * 1000),
    order: 24,
    checked: true,
    category: "finance",
  },
  {
    _id: 25,
    title: "Client Feedback Analysis",
    createdAt: new Date(Date.now() + 26 * 24 * 60 * 60 * 1000),
    order: 25,
    checked: true,
    category: "client",
  },
  {
    _id: 26,
    title: "Development Team Retrospective",
    createdAt: new Date(Date.now() + 27 * 24 * 60 * 60 * 1000),
    order: 26,
    checked: true,
    category: "development",
  },
  {
    _id: 27,
    title: "Sales Forecast Review",
    createdAt: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
    order: 27,
    checked: true,
    category: "work",
  },
  {
    _id: 28,
    title: "Client Satisfaction Metrics",
    createdAt: new Date(Date.now() + 29 * 24 * 60 * 60 * 1000),
    order: 28,
    checked: true,
    category: "client",
  },
  {
    _id: 29,
    title: "Marketing Strategy Update",
    createdAt: new Date(Date.now() + 32 * 24 * 60 * 60 * 1000),
    order: 29,
    checked: true,
    category: "marketing",
  },
  {
    _id: 30,
    title: "Design System Audit",
    createdAt: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000),
    order: 30,
    checked: true,
    category: "design",
  },
];

export function useTasks({ category }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let filteredTasks = _.cloneDeep(initialData);

    switch (category) {
      case "completed":
        filteredTasks = filteredTasks.filter((task) => task.checked);
        break;
      case "today":
        const today = new Date();
        filteredTasks = filteredTasks.filter((task) => {
          const taskDate = new Date(task.createdAt);
          return (
            taskDate.getDate() === today.getDate() &&
            taskDate.getMonth() === today.getMonth() &&
            taskDate.getFullYear() === today.getFullYear()
          );
        });
        break;

      case "all":
        break;

      default:
        filteredTasks = filteredTasks.filter(
          (task) => task.category === category
        );
        break;
    }

    filteredTasks = filteredTasks.sort((a, b) => a.order - b.order);

    setTasks(filteredTasks);
  }, [category]);

  const handleTaskCheck = (isChecked, taskId) => {
    const updatedTaskIndex = tasks.findIndex((t) => t._id === taskId);
    const latestCheckedIndex = tasks.filter((t) => !t.checked);

    const updatedTasks = _.cloneDeep(tasks);

    updatedTasks[updatedTaskIndex].order = latestCheckedIndex.length;
    updatedTasks[updatedTaskIndex].checked = isChecked;

    const orderedTasks = updatedTasks
      .map((task, index) => {
        if (task._id !== taskId) {
          return {
            ...task,
            order:
              index === updatedTasks[updatedTaskIndex].order
                ? updatedTasks[updatedTaskIndex].order + 1
                : index,
            checked: task._id === taskId ? isChecked : task.checked,
          };
        }

        return task;
      })
      .sort((a, b) => a.order - b.order);

    setTasks(orderedTasks);
  };

  const handleTaskDelete = (taskIndex, taskId) => {
    const updatedTasks = _.cloneDeep(tasks);

    delete updatedTasks[taskIndex];

    setTasks(updatedTasks);

    console.log(taskId);
    // send request to backend to remove the task
  };

  return {
    tasks,
    handleTaskCheck,
    handleTaskDelete,
  };
}
