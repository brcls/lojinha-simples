import React from "react";
import NavBar from "../components/NavBar";
import { Container, Typography, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import addCartAction from "../store/actions/ActionCarrinho";
import { Link } from "react-router-dom";
import ProdutoNoCarrinho from "../components/ProdutoNoCarrinho";

function Produtos() {
  const carrinho = useSelector((state) => state.ReducerCarrinho);
  const dispatch = useDispatch();

  function addItemCart(item) {
    dispatch(addCartAction(item));
  }

  console.log(typeof carrinho);

  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          align="flex-start"
          sx={{ fontFamily: "Roboto", mt: "3%", mb: "3%" }}
        >
          Seu carrinho de compras:
        </Typography>
        {carrinho.data.length === 0 ? (
          <h1>NADA NO CARRINHO</h1>
        ) : (
          carrinho.data.map((item, Key) => (
            <Grid item mt={"5%"} xs={2} sm={4} md={4}>
              <ProdutoNoCarrinho
                key={Key}
                item={item}
                addItemCart={addItemCart}
              />
            </Grid>
          ))
        )}

        <Link to="/pedido-finalizado" style={{ textDecoration: "none" }}>
          <Button fullWidth color="primary" sx={{ mt: "2%", boxShadow: 5 }}>
            Finalizar compra
          </Button>
        </Link>
      </Container>
    </>
  );
}

export default Produtos;
