import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import SidebarItem from "./components/SideBar/SidebarItem";
import "./App.css";
import { TasksList } from "./components/tasks/taskList";
import { useTasks } from "./hooks/useTasks";
import { usePages } from "./hooks/usePages";

export default function App() {
  const { pages, addPage } = usePages();

  return (
    <Router>
      <div className="flex">
        <Sidebar addPage={addPage} pages={pages}>
          {pages.map((page, index) => (
            <div key={index}>
              <SidebarItem
                icon={page.sidebarItem.icon}
                text={page.sidebarItem.text}
                to={page.path}
                alert={page.sidebarItem.alert}
              />
              {index === 2 && <hr className="my-3" />}
            </div>
          ))}
        </Sidebar>

        <div className="flex-grow p-14">
          <Routes>
            {pages.map((page, index) => (
              <Route
                key={index}
                path={page.path}
                element={<DynamicPage category={page.category} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function DynamicPage({ category }) {
  const { tasks, handleTaskCheck, handleTaskDelete } = useTasks({
    category,
  });

  return (
    <TasksList
      tasks={tasks}
      onCheck={handleTaskCheck}
      handleTaskDelete={handleTaskDelete}
    />
  );
}
