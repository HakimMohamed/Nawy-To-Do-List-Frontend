import { TasksList } from "../components/tasks/taskList";
import { useTasks } from "../hooks/useTasks";

export default function ProjectsPage() {
  const { tasks, handleTaskCheck, handleTaskDelete } = useTasks({
    status: "all",
  });

  return (
    <TasksList
      tasks={tasks}
      onCheck={handleTaskCheck}
      handleTaskDelete={handleTaskDelete}
    />
  );
}
