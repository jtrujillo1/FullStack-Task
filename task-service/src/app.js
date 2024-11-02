const express = require("express");
const sequelize = require("./config/database");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // URL de la aplicación frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    credentials: true, // Permitir cookies y headers de autenticación
  })
);
app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log("Conectado a MySQL y sincronizada la base de datos");
  })
  .catch((err) => console.error("Error de conexión a MySQL:", err));

app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Task service listening on port ${PORT}`));
