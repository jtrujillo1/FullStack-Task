const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:3000", // URL de la aplicación frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    credentials: true, // Permitir cookies y headers de autenticación
  })
);

sequelize
  .sync()
  .then(() => {
    console.log("Conectado a MySQL y sincronizada la base de datos");
  })
  .catch((err) => console.error("Error de conexión a MySQL:", err));

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Auth service listening on port ${PORT}`));
