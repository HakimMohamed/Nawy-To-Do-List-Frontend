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
    _id: 8,
    title: "New Feature Development",
    createdAt: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
    order: 9,
    checked: true,
    category: "development",
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
