import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import MessagePage from "./pages/MessagePage";
import NotificationPage from "./pages/NotificationPage";
import FeedbackPage from "./pages/FeedbackPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/messages" element={<MessagePage />} />
    <Route path="/notifications" element={<NotificationPage />} />
    <Route path="/feedback" element={<FeedbackPage />} />
  </Routes>
);

export default AppRoutes;
