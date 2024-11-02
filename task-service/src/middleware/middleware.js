// src/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Acceso denegado. No se proporcionó un token." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guardar datos del usuario en `req.user`
    next();
  } catch (error) {
    res.status(403).json({ message: "Token inválido o expirado." });
  }
};

module.exports = authMiddleware;
