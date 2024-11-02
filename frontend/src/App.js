import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Navbar from "./Layout/Navbar";
import NotFound from "./Pages/NotFound";
import "./App.css";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
