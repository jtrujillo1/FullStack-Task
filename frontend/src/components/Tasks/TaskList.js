import React from "react";
import { List, Typography } from "@mui/material";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => (
  <>
    <Typography variant="h5">Tareas</Typography>
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  </>
);

export default TaskList;
