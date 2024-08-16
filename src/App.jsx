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
import { Layers } from "lucide-react";
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
