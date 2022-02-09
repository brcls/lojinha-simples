import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Container, Typography, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import addCartAction from "../store/actions/ActionCarrinho";
import removeCartAction from "../store/actions/ActionRemoveCarrinho";
import { Link } from "react-router-dom";
import ProdutoNoCarrinho from "../components/ProdutoNoCarrinho";

function Produtos() {
  const [subtotal, setSubTotal] = useState(0);
  const carrinho = useSelector((state) => state.ReducerCarrinho);
  const dispatch = useDispatch();

  function addItemCart(item) {
    dispatch(addCartAction(item));
  }

  function removeItemCart(item) {
    dispatch(removeCartAction(item));
  }

  useEffect(() => {
    let count = 0;
    carrinho.data.map((item) => {
      count += item.price;
    });
    setSubTotal(count);
  }, [carrinho]);

  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="flex-start"
          sx={{ fontFamily: "Roboto", mt: "3%" }}
        >
          Seu carrinho de compras:
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {carrinho.data.length === 0 ? (
            <Typography
              variant="h5"
              align="center"
              sx={{ fontFamily: "Roboto", mt: "4%", ml: "30%" }}
            >
              CARRINHO VÁZIO
            </Typography>
          ) : (
            carrinho.data.map((item, Key) => (
              <Grid item mt={"3%"} xs={2} sm={4} md={4}>
                <ProdutoNoCarrinho
                  key={Key}
                  item={item}
                  addItemCart={addItemCart}
                  removeItemCart={removeItemCart}
                />
              </Grid>
            ))
          )}
        </Grid>
        <Typography
          variant="h5"
          align="flex-start"
          sx={{ fontFamily: "Roboto", mt: "3%" }}
        >
          Subtotal: {subtotal}
        </Typography>
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
