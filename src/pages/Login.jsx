import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowCircleLeft } from "@mui/icons-material";
import { useEffect } from "react";

function Login({ aoEnviar, validarCPF }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState("");

  function onChange(ev) {
    const { name, value } = ev.target;
    setErros("");
    if (name === "email") setEmail(value);
    if (name === "senha") setSenha(value);
  }

  function validate(email, senha) {
    let erros;

    if (email === "") erros = "Insira um email válido";
    else if (senha === "") erros = "Insira uma senha válida";
    else erros = "Email e/ou senha incorretos";

    return erros;
  }

  function onSubmit(ev) {
    ev.preventDefault();

    setErros(validate(email, senha));

    console.log(erros);

    if (email === "erick@liven.tech" && senha === "123") {
      window.location.href = "/produtos";
    }
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          fullWidth
          size="small"
          sx={{ boxShadow: 5, mt: "20%", ml: "20%" }}
        >
          <ArrowCircleLeft />
        </Button>
      </Link>

      <Container component="article" maxWidth="sm" sx={{ mr: "30%" }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{ fontFamily: "Roboto", mt: 10 }}
        >
          Login
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            name="email"
            onChange={onChange}
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            name="senha"
            onChange={onChange}
            label="Senha"
            variant="outlined"
            margin="normal"
            type="password"
            fullWidth
          />
          <label>{erros}</label>
          <Button
            fullWidth
            type="submit"
            color="primary"
            sx={{ mt: "1%", fontWeight: "bold", boxShadow: 5 }}
          >
            Login
          </Button>
        </form>
      </Container>
    </Grid>
  );
}

export default Login;
