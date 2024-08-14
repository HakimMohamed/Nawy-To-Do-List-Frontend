import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import CalendarPage from "./pages/CalendarPage";
import TasksPage from "./pages/TasksPage";
import ReportingPage from "./pages/ReportingPage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./components/SideBar/Sidebar";
import SidebarItem from "./components/SideBar/SidebarItem";
import {
  LayoutDashboard,
  StickyNote,
  Layers,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";
import "./App.css"; // Import the global styles including MessageBox styles
import MessageBox from "./components/MessageBox/MessageBox";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar>
          <SidebarItem
            icon={<img src="./icons/home.svg" className="w-7 h-7" alt="Home" />}
            text="Home"
            to="/"
            alert
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            to="/dashboard"
          />
          <SidebarItem
            icon={<StickyNote size={20} />}
            text="Projects"
            to="/projects"
            alert
          />
          <SidebarItem
            icon={<Calendar size={20} />}
            text="Calendar"
            to="/calendar"
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
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/reporting" element={<ReportingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <MessageBox />
    </Router>
  );
}
