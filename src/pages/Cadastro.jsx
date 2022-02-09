import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowCircleLeft} from "@mui/icons-material";

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
          Cadastro
        </Typography>
        <form
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
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="email"
            label=" Email"
            variant="outlined"
            margin="normal"
            type={"email"}
            fullWidth
          />
          <TextField
            value={cpf}
            onChange={(event) => {
              setCpf(event.target.value);
            }}
            id="CPF"
            label="CPF"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            value={nascimento}
            onChange={(event) => {
              setNascimento(event.target.value);
            }}
            id="DataDeNascimento"
            variant="outlined"
            margin="normal"
            type={"date"}
            fullWidth
          />

          <TextField
            value={senha}
            onChange={(event) => {
              setSenha(event.target.value);
            }}
            id="senha"
            label=" Senha"
            variant="outlined"
            margin="normal"
            type={"password"}
            fullWidth
          />
          <Link to="/produtos" style={{ textDecoration: "none" }}>
            <Button
              type="submit"
              color="primary"
              fullWidth
              sx={{ mt: "1%", fontWeight: "bold", boxShadow: 5 }}
            >
              Cadastrar
            </Button>
          </Link>
        </form>
      </Container>
    </Grid>
  );
}

export default Cadastro;
