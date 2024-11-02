// models/Task.js

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Asegúrate de que la ruta a la configuración de tu base de datos es correcta

class Task extends Model {
  static associate(models) {
    Task.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user", // Alias para la relación
    });
  }
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Título es obligatorio
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // Descripción es opcional
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, // userId es obligatorio
      references: {
        model: "Users", // Nombre de la tabla de usuarios
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Task",
    tableName: "tasks", // Nombre de la tabla en la base de datos
    timestamps: true, // Generar createdAt y updatedAt
  }
);

module.exports = Task;
