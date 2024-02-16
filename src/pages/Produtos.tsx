import Produto from "../components/Produto";
import NavBar from "../components/NavBar";
import { Grid, Skeleton, Alert } from "@mui/material";
import { IProdutoData } from "../interfaces/IProdutoData";
import { useQuery } from "react-query";
import { useState } from "react";

export interface IAlertControl {
  show: boolean;
  severity: "error" | "info" | "success" | "warning";
  message: string;
}

function Produtos() {
  const { data: products } = useQuery<IProdutoData[]>("todos", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );

  const [alertControl, setAlertControl] = useState<IAlertControl>(
    {} as IAlertControl
  );

  return (
    <>
      <NavBar />
      <Grid
        direction="row"
        justifyContent="start"
        alignItems="center"
        padding={4}
        container
        spacing={4}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {products?.length
          ? products.map((item, Key) => (
              <Grid key={Key} item xs={2} sm={4} md={4}>
                <Produto produto={item} setAlertControl={setAlertControl} />
              </Grid>
            ))
          : Array(10)
              .fill(null)
              .map((_, index) => (
                <Grid key={index} item xs={2} sm={4} md={4}>
                  <Skeleton
                    variant="rectangular"
                    height={"320px"}
                    sx={{ borderRadius: 1 }}
                  />
                </Grid>
              ))}
      </Grid>
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
