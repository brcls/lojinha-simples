import React from "react";
import { Button, Grid, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";

function TelaIncial() {
  return (
    <Grid
      container
      sx={{ mt: "10%" }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <StorefrontTwoToneIcon
        sx={{ width: "10%", height: "10%", color: "#22bffd" }}
      />
      <Typography
        variant="h4"
        align="center"
        sx={{ fontFamily: "Roboto", mt: "1%" }}
      >
        Bem vindo à Lojinha!
      </Typography>
      <Typography
        variant="h7"
        align="center"
        sx={{ fontFamily: "Roboto", mt: "1%" }}
      >
        Faça seu cadastro! Se já possui conta, faça seu login abaixo.
      </Typography>
      <Container maxWidth="xs" sx={{ mt: "1%" }}>
        <Link to="/cadastro" style={{ textDecoration: "none" }}>
          <Button
            fullWidth
            sx={{ margin: 1, fontWeight: "bold", boxShadow: 5 }}
          >
            Cadastro
          </Button>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            fullWidth
            sx={{ margin: 1, fontWeight: "bold", boxShadow: 5 }}
          >
            Login
          </Button>
        </Link>
      </Container>
    </Grid>
  );
}

export default TelaIncial;
