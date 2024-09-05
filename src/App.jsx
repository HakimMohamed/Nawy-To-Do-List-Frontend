import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
import LandingPage from "./components/landingPage/LandingPage";
import ThemeProvider from "./theme";

export default function App() {
  const { pages, addPage, removePage, updatePage } = usePages();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <AppContent
          pages={pages}
          addPage={addPage}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          showRegister={showRegister}
          setShowRegister={setShowRegister}
          removePage={removePage}
          updatePage={updatePage}
        />
      </Router>
    </ThemeProvider>
  );
}

function AppContent({
  pages,
  addPage,
  showLogin,
  setShowLogin,
  showRegister,
  setShowRegister,
  removePage,
  updatePage,
}) {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      <div className="flex">
        {location.pathname !== "/" && (
          <Sidebar addPage={addPage} pages={pages}>
            {pages.map((page, index) => (
              <div key={page._id}>
                <SidebarItem
                  icon={page.icon}
                  text={page.text}
                  updatePage={updatePage}
                  categoryId={page._id}
                  to={page.path}
                  alert={page.alert}
                  removePage={removePage}
                />
                {index === 2 && <hr className="my-3" />}
              </div>
            ))}
          </Sidebar>
        )}
        <div className={`flex-grow ${isLandingPage ? "" : "p-14"}`}>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  setShowRegister={setShowRegister}
                  setShowLogin={setShowLogin}
                />
              }
            />
            {pages.map((page, index) => (
              <Route
                key={index}
                path={page.path}
                element={
                  <DynamicPage
                    category={page.category}
                    categoryId={page._id}
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
    </>
  );
}

function DynamicPage({ category, setShowRegister, categoryId }) {
  const { tasks, handleTaskCheck, handleTaskDelete, addTask, loading } =
    useTasks({
      category,
      setShowRegister,
      categoryId,
    });

  return (
    <>
      <ChatBox addTask={addTask} />
      <TasksList
        tasks={tasks}
        loading={loading}
        onCheck={handleTaskCheck}
        handleTaskDelete={handleTaskDelete}
      />
    </>
  );
}
