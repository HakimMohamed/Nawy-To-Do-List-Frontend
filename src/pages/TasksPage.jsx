import { useTasks } from "../hooks/useTasks";
import { TasksList } from "../components/tasks/taskList";

export default function TasksPage() {
  const { tasks, handleTaskCheck, handleTaskDelete } = useTasks();

  return (
    <TasksList
      tasks={tasks}
      onCheck={handleTaskCheck}
      handleTaskDelete={handleTaskDelete}
    />
  );
}
