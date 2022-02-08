import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import {ArrowCircleLeft} from '@mui/icons-material';

function Login({aoEnviar, validarCPF}) {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-around"
    alignItems="flex-start"
    >
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Button fullWidth size='small' sx={{boxShadow: 5, margin: 2}}>
                <ArrowCircleLeft/>
            </Button>
        </Link>

        <Container component="article" maxWidth="sm" sx={{mr: 60}}>
            <Typography variant="h3" component="h1" align="center" sx={{fontFamily: 'Roboto', mt: 10}} >Login</Typography>
            <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({cpf, senha});
            }}
            >
            <TextField
                value={cpf}
                onChange={(event) => {
                setCpf(event.target.value);
                }}

                onBlur={(event)=>{
                const ehValido = validarCPF(cpf);
                setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={senha}
                onChange={(event) => {
                setSenha(event.target.value);
                }}
                id="senha"
                label="senha"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Link to="/produtos" style={{ textDecoration: 'none' }}>
                <Button fullWidth type="submit" color="primary" sx={{mt: 1, fontWeight: "bold", boxShadow: 5}}>
                    Login
                </Button>
            </Link>
            </form>
        </Container>
    </Grid>
  );
}

export default Login;
