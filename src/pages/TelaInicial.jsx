import React from "react";
import { Button, Container } from '@mui/material';
import LojaLogo from '../assets/loja.png';

function TelaIncial(){
    return(
        <Container maxWidth="sm">
            <img src={LojaLogo} alt="loja logo" width="150" height="150"/>
            <Button variant="contained" fullWidth >Cadastro</Button>
            <Button variant="contained" fullWidth>Login</Button>
        </Container>
    )
}

export default TelaIncial;