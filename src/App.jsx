import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import SidebarItem from "./components/SideBar/SidebarItem";
import ChatBox from "./components/ChatBox/ChatBox"; // Import the ChatBox component
import "./App.css";
import { TasksList } from "./components/tasks/taskList";
import { useTasks } from "./hooks/useTasks";
import { usePages } from "./hooks/usePages";
import { useState } from "react";
import LoginModal from "./components/auth/loginModal";
import RegisterModal from "./components/auth/registerModal";

export default function App() {
  const { pages, addPage } = usePages();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
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
                  element={
                    <DynamicPage
                      category={page.category}
                      setShowRegister={setShowRegister}
                    />
                  }
                />
              ))}
            </Routes>
          </div>
        </div>
        <LoginModal
          open={showLogin}
          onClose={() => setShowLogin(false)}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
        />
        <RegisterModal
          open={showRegister}
          onClose={() => setShowRegister(false)}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
        />
      </Router>
    </>
  );
}

function DynamicPage({ category, setShowRegister }) {
  const { tasks, handleTaskCheck, handleTaskDelete, addTask } = useTasks({
    category,
    setShowRegister,
  });

  return (
    <>
      <ChatBox addTask={addTask} />
      <TasksList
        tasks={tasks}
        onCheck={handleTaskCheck}
        handleTaskDelete={handleTaskDelete}
      />
    </>
  );
}
