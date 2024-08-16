import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodayPage from "./pages/TodayPage";
import CompletedPage from "./pages/CompletedPage";
import AllPage from "./pages/All";
import TasksPage from "./pages/TasksPage";
import ReportingPage from "./pages/ReportingPage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./components/SideBar/Sidebar";
import SidebarItem from "./components/SideBar/SidebarItem";
import { Layers, LifeBuoy, Settings, LogOut } from "lucide-react";
import "./App.css";

export default function App() {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar>
          <SidebarItem
            icon={<img src="./icons/sun.svg" className="w-7 h-7" alt="Today" />}
            text="Today"
            to="/"
            alert
          />
          <SidebarItem
            icon={
              <img
                src="./icons/completed.svg"
                className="w-7 h-7"
                alt="Completed"
              />
            }
            text="Completed"
            to="/completed"
          />
          <SidebarItem
            icon={
              <img src="./icons/infinity.svg" className="w-6 h-6" alt="All" />
            }
            text="All"
            to="/all"
            alert
          />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" to="/tasks" />
          <hr className="my-3" />
          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            to="/settings"
          />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" to="/help" />
          <SidebarItem
            icon={<LogOut size={20} style={{ color: "#e63946" }} />} // Default vibrant red color for the icon
            text="Logout"
            onClick={handleLogout}
            style={{
              color: "#e63946",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f08c82";
              e.currentTarget.children[0].style.color = "#f08c82";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#e63946";
              e.currentTarget.children[0].style.color = "#e63946";
            }}
          />
        </Sidebar>

        <div className="flex-grow p-14">
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="/completed" element={<CompletedPage />} />
            <Route path="/all" element={<AllPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/reporting" element={<ReportingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
