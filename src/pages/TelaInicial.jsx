import React from "react";
import { Button, Grid, Container, Typography } from '@mui/material';
import LojaLogo from '../assets/loja.png';
import { Link } from 'react-router-dom';

function TelaIncial() {
    return (
        <Grid
            container
            spacing={12}
            sx={{ mt: 17 }}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
        >
            <img src={LojaLogo} alt="loja logo" width="150" height="150" />
            <Typography variant="h4" align="center" sx={{ fontFamily: 'Roboto', mt: "2%" }}>
                Bem vindo a Lojinha!
            </Typography>
            <Typography variant="h7" align="center" sx={{ fontFamily: 'Roboto', mt: "1%" }}>
                Faça seu cadastro! Se já possui conta, faça seu login abaixo.
            </Typography>
            <Container maxWidth="xs" sx={{ mt: "1%" }}>
                <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                    <Button fullWidth sx={{ margin: 1, fontWeight: "bold", boxShadow: 5 }}>Cadastro</Button>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button fullWidth sx={{ margin: 1, fontWeight: "bold", boxShadow: 5 }}>Login</Button>
                </Link>
            </Container>
        </Grid>
    )
}

export default TelaIncial;