import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Email inválido").required("Requerido"),
      password: Yup.string()
        .min(6, "Debe tener al menos 6 caracteres")
        .required("Requerido"),
    }),
    onSubmit: async (values) => {
      const { data } = await axios.post(
        `${process.env.REACT_APP_AUTH_SERVICE_URL}/login`,
        { ...values }
      );
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    },
  });

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4">Inicio de Sesión</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          {...formik.getFieldProps("email")}
          margin="normal"
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Contraseña"
          type="password"
          {...formik.getFieldProps("password")}
          margin="normal"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Iniciar Sesión
        </Button>
      </form>
      <Button color="inherit" component={Link} to="/register">
        Registrarse
      </Button>
    </Box>
  );
};

export default LoginPage;
