import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel, Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowCircleLeft } from "@mui/icons-material"

function Cadastro({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
        >
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button fullWidth size='small' sx={{ boxShadow: 5, mt: "20%", ml: "20%" }}>
                    <ArrowCircleLeft />
                </Button>
            </Link>
            <Container component="article" maxWidth="sm" sx={{ mr: "30%" }}>
                <Typography variant="h3" component="h1" align="center" sx={{ fontFamily: 'Roboto', mt: 10 }}>Cadastro</Typography>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        aoEnviar({ nome, sobrenome, cpf, novidades, promocoes, senha });
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
                        value={sobrenome}
                        onChange={(event) => {
                            setSobrenome(event.target.value);
                        }}
                        id="sobrenome"
                        label="Sobrenome"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        value={cpf}
                        onChange={(event) => {
                            setCpf(event.target.value);
                        }}

                        onBlur={(event) => {
                            const ehValido = validarCPF(cpf);
                            setErros({ cpf: ehValido })
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

                    <FormControlLabel
                        label="Promoções"
                        control={
                            <Switch
                                checked={promocoes}
                                onChange={(event) => {
                                    setPromocoes(event.target.checked);
                                }}
                                name="promocoes"
                                color="primary"
                            />
                        }
                    />

                    <FormControlLabel
                        label="Novidades"
                        control={
                            <Switch
                                checked={novidades}
                                onChange={(event) => {
                                    setNovidades(event.target.checked);
                                }}
                                name="novidades"
                                color="primary"
                            />
                        }
                    />
                    <Link to="/produtos" style={{ textDecoration: 'none' }}>
                        <Button type="submit" color="primary" fullWidth sx={{ mt: "1%", fontWeight: "bold", boxShadow: 5 }}>
                            Cadastrar
                        </Button>
                    </Link>
                </form>
            </Container>
        </Grid>
    );
}

export default Cadastro;
