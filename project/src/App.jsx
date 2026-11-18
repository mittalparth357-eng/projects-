import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddTask from "./components/AddTask";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import AllTasks from "./components/AllTasks";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // Load Tasks from Local Storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save Tasks in Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard tasks={tasks} setTasks={setTasks} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/addtask"
        element={
          <ProtectedRoute>
            <AddTask tasks={tasks} setTasks={setTasks} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/alltasks"
        element={
          <ProtectedRoute>
            <AllTasks tasks={tasks} setTasks={setTasks} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />

      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;