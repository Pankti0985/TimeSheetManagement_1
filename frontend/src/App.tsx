import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import InternDashboard from './dashboards/InternDashboard';
import ManagerDashboard from './dashboards/ManagerDashboard';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/intern" element={<InternDashboard />} />
      <Route path="/manager" element={<ManagerDashboard />} />
    </Routes>
  );
}
