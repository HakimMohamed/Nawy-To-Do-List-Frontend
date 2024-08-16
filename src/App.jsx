import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodayPage from "./pages/TodayPage";
import DashboardPage from "./pages/DashboardPage";
import AllPage from "./pages/All";
import TasksPage from "./pages/TasksPage";
import ReportingPage from "./pages/ReportingPage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./components/SideBar/Sidebar";
import SidebarItem from "./components/SideBar/SidebarItem";
import { Layers, LifeBuoy, Settings } from "lucide-react";
import "./App.css";

export default function App() {
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
                alt="Today"
              />
            }
            text="Completed"
            to="/completed"
          />
          <SidebarItem
            icon={
              <img src="./icons/infinity.svg" className="w-6 h-6" alt="Home" />
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
        </Sidebar>

        <div className="flex-grow p-14">
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
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
