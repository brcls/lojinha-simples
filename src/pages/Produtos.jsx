import React, { useEffect, useState } from "react";
import Produto from "../components/Produto";
import NavBar from "../components/NavBar";
import { Grid, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import addCartAction from "../store/actions/ActionCarrinho";

function Produtos() {
  const [products, setProducts] = useState(null);
  const carrinho = useSelector((state) => state.ReducerCarrinho);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  function addItemCart(item) {
    dispatch(addCartAction(item));
  }

  // console.log(products);
  console.log(carrinho);

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
        {products
          ? products.map((item, Key) => (
              <Grid key={Key} item xs={2} sm={4} md={4}>
                <Produto item={item} addItemCart={addItemCart} />
              </Grid>
            ))
          : Array(10)
              .fill()
              .map((Key) => (
                <Grid key={Key} item xs={2} sm={4} md={4}>
                  <Skeleton
                    variant="rectangular"
                    height={"270px"}
                    sx={{ borderRadius: 1 }}
                  />
                </Grid>
              ))}
      </Grid>
    </>
  );
}

export default Produtos;
