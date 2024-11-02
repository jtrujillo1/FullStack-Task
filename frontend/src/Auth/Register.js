import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
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
        `${process.env.REACT_APP_AUTH_SERVICE_URL}/register`,
        { ...values }
      );
      if (data) {
        console.log(data);
        navigate("/login");
      }
    },
  });

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4">Registro</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Contraseña"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
        >
          Registrarse
        </Button>
      </form>
      <Button color="inherit" component={Link} to="/login">
        Iniciar Sesion
      </Button>
    </Box>
  );
};

export default Register;
