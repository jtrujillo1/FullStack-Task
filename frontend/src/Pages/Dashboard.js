import React, { useState, useEffect } from "react";
import TaskModal from "../components/Tasks/TaskModal";
import API from "../utils/api";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null); // Para almacenar la tarea a editar

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await API.get();
        setTasks(response.data);
      } catch (error) {
        console.error("Error al cargar las tareas:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleOpenModal = (task = null) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    setModalOpen(false);
  };

  const handleSaveTask = async (task) => {
    try {
      if (task.id) {
        // Editar tarea
        await API.put(`/${task.id}`, task);
      } else {
        // Crear tarea
        await API.post("", task);
      }
      // Refrescar tareas después de crear/editar
      const response = await API.get();
      setTasks(response.data);
      handleCloseModal();
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await API.delete(`/${taskId}`);
      const response = await API.get();
      setTasks(response.data);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Método para verificar si el usuario está autenticado
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null; // Devuelve true si el token existe
  };

  // Comprobar la autenticación al cargar el componente
  React.useEffect(() => {
    if (!isAuthenticated()) {
      // Si no está autenticado, redirigir al login
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Tareas
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenModal()}
      >
        Agregar Tarea
      </Button>
      <Box sx={{ marginTop: 2 }}>
        {tasks.map((task) => (
          <Box
            key={task.id}
            sx={{
              marginBottom: 1,
              padding: 2,
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body1">{task.description}</Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleOpenModal(task)}
            >
              Editar
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleDelete(task.id)}
            >
              Eliminar
            </Button>
          </Box>
        ))}
      </Box>
      <TaskModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
        task={selectedTask}
      />
    </Box>
  );
};

export default Dashboard;
