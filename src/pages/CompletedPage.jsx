import { TasksList } from "../components/tasks/taskList";
import { useTasks } from "../hooks/useTasks";

export default function CompletedPage() {
  const { tasks, handleTaskCheck } = useTasks({ status: "completed" });

  return <TasksList tasks={tasks} onCheck={handleTaskCheck} />;
}
