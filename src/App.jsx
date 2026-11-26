

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Project from '../src/pages/Project';
import Task from './pages/Task';
import Team from './pages/Team';
import Clients from './pages/Clients';
import Dashboard from './pages/Dashboard';
import Calender from './pages/Calender';
import Settings from './pages/Settings';
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
    </Routes>
    </BrowserRouter>  
  )

}

export default App;

