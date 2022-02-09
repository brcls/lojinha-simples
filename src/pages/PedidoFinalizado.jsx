import React from "react";
import { Button, Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowCircleLeft} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function PaginaFinalizado() {
  const [total, setTotal] = useState (0);
  const carrinho = useSelector((state) => state.ReducerCarrinho);

  useEffect (() => {
    let count = 0;
    carrinho.data.map((item) => {
      count += item.price;
    });
    setTotal(count);
  }, [carrinho]);

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
      <Container maxWidth="lg" sx={{ mr: "12%"}}>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontFamily: "Roboto", mt: "5%" }}
        >
          Seu pedido foi finalizado!
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontFamily: "Roboto", mt: "3%", mb: "3%"}}
        >
          O valor total do seu pedido: {total}
        </Typography>
      </Container>
    </Grid>
  );
}

export default PaginaFinalizado;
