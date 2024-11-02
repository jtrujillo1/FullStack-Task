const Task = require("../models/Task");

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;

  try {
    const task = await Task.create({ title, description, userId });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las tareas de un usuario
exports.getTasks = async (req, res) => {
  const userId = req.user.id;
  try {
    const tasks = await Task.findAll({ where: { userId } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una tarea
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      task.title = title;
      task.description = description;
      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ error: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una tarea
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.destroy({ where: { id } });
    if (task) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
