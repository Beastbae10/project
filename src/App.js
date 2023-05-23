import React from "react";
import Login from "./pages/Login/login";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Overview from './pages/Dashboard/overview';
import Analytics from './pages/Dashboard/analytics' ;
import Dashboard from './pages/Dashboard/dashboard';
import Students from './pages/Dashboard/students';
import Settings from './pages/Dashboard/settings';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/pages/Dashboard/overview" element={<Overview />} />
          <Route path="/pages/Dashboard/analytics" element={<Analytics />} />
          <Route path="/pages/Dashboard/dashboard" element={<Dashboard />} />
          <Route path="/pages/Dashboard/students" element={<Students />} />
          <Route path="/pages/Dashboard/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
       
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};



export default App;