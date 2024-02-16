import NavBar from "../components/NavBar";
import { Typography, Button, Grid, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { cartState } from "../store/cartSlice";
import Produto from "../components/Produto";
import { IAlertControl } from "./Produtos";
import { useState } from "react";

function Produtos() {
  const cart = useAppSelector(cartState);

  const [alertControl, setAlertControl] = useState<IAlertControl>(
    {} as IAlertControl
  );

  return (
    <>
      <NavBar />
      <div style={{ padding: 24 }}>
        <Typography variant="h5" sx={{ fontFamily: "Roboto" }}>
          Seu carrinho de compras:
        </Typography>
        <Grid
          direction="row"
          justifyContent="start"
          alignItems="center"
          container
          spacing={4}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {cart.subTotal !== 0 ? (
            cart.products.map((item, Key) => (
              <Grid key={Key} item xs={2} sm={4} md={4}>
                <Produto
                  produto={item}
                  isCartView
                  setAlertControl={setAlertControl}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={2} sm={4} md={4}>
              <h2>Carrinho vazio</h2>
            </Grid>
          )}
        </Grid>
        <Typography variant="h5" sx={{ fontFamily: "Roboto", mt: "3%" }}>
          Subtotal: {cart.subTotal}
        </Typography>
        <Link to="/pedido-finalizado" style={{ textDecoration: "none" }}>
          <Button fullWidth variant="contained">
            Finalizar compra
          </Button>
        </Link>
      </div>
      {alertControl.show && (
        <Alert
          sx={{ position: "fixed", zIndex: 10, right: 20, bottom: 20 }}
          variant="filled"
          severity={alertControl.severity}
        >
          {alertControl.message}
        </Alert>
      )}
    </>
  );
}

export default Produtos;
