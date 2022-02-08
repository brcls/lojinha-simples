import React from "react";
import { Button, Grid, Container } from '@mui/material';
import LojaLogo from '../assets/loja.png';
import {Link} from 'react-router-dom';

function TelaIncial(){
    return(
        <Grid
        container
        spacing={12}
        sx={{mt: 17}}
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        >
            <img src={LojaLogo} alt="loja logo" width="150" height="150"/>
            <Container  maxWidth="xs" sx={{mt:"3%"}}>
                <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                    <Button fullWidth sx={{margin: 1, background: "#50c878", color: "white", fontWeight: "bold", boxShadow: 5}}>Cadastro</Button>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button fullWidth sx={{margin: 1, background: "#50c878", color: "white", fontWeight: "bold", boxShadow: 5}}>Login</Button>
                </Link>
            </Container>
        </Grid>
    )
}

export default TelaIncial;