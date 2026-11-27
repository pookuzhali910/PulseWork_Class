import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Project from './pages/Project';
import Task from './pages/Task';
import Team from './pages/Team';
import Clients from './pages/Clients';
import Dashboard from './pages/Dashboard';
import Calender  from "./pages/Calender";
import Settings from "./pages/Settings";
import Register from "./pages/register";
import Admin from "./pages/Admin/adminlayout";
import Admindashboard from "./pages/Admin/Admindashboard";
import UserDetails from "./pages/Admin/userDetails";
import AdminSettings from "./pages/Admin/settings";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/tasks" element={<Task/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/calender" element={<Calender/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin />}>
           <Route path="dashboard" element={<Admindashboard />}/>
           <Route path="userDetails" element={<UserDetails />}/>
           <Route path="settings" element={<AdminSettings />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

