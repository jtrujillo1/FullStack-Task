import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskItem = ({ task, onEdit, onDelete }) => (
  <ListItem>
    <ListItemText primary={task.title} secondary={task.description} />
    <IconButton onClick={() => onEdit(task)}>
      <EditIcon />
    </IconButton>
    <IconButton onClick={() => onDelete(task.id)}>
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

export default TaskItem;
