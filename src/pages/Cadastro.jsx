import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowCircleLeft } from "@mui/icons-material";

function Cadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [senha, setSenha] = useState("");

  function printa(event) {
    console.log(nome, email, cpf, nascimento, senha);
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          position: "absolute",
          left: 10,
          top: 10,
        }}
      >
        <IconButton>
          <ArrowCircleLeft />
        </IconButton>
      </Link>
      <Container sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5" align="left" sx={{ fontWeight: "bold" }}>
          Cadastro
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
          onSubmit={(event) => {
            event.preventDefault();
            printa(event);
          }}
        >
          <TextField
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
            }}
            id="nome"
            label="Nome"
            fullWidth
            size="small"
          />
          <TextField
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="email"
            label=" Email"
            type={"email"}
            fullWidth
            size="small"
          />
          <TextField
            value={cpf}
            onChange={(event) => {
              setCpf(event.target.value);
            }}
            id="CPF"
            label="CPF"
            fullWidth
            size="small"
          />
          <TextField
            value={nascimento}
            onChange={(event) => {
              setNascimento(event.target.value);
            }}
            id="DataDeNascimento"
            type={"date"}
            fullWidth
            size="small"
          />

          <TextField
            value={senha}
            onChange={(event) => {
              setSenha(event.target.value);
            }}
            id="senha"
            label=" Senha"
            type={"password"}
            fullWidth
            size="small"
          />
          <Link to="/produtos" style={{ textDecoration: "none" }}>
            <Button type="submit" variant="outlined" fullWidth>
              Cadastrar
            </Button>
          </Link>
        </form>
      </Container>
    </Box>
  );
}

export default Cadastro;
