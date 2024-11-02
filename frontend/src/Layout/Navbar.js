import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Método para verificar si el usuario está autenticado
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null; // Devuelve true si el token existe
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token del localStorage
    navigate("/login"); // Redirigir al usuario a la página de login
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Task App
        </Typography>
        {isAuthenticated() ? (
          <>
            <Button color="inherit" component={Link} to="/">
              Dashboard
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Iniciar Sesión
          </Button>
        )}

        {/* <Button color="inherit" component={Link} to="/register">
        Registro
      </Button> */}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
