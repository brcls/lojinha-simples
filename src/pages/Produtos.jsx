import React, { useEffect, useState } from "react";
import Produto from "../components/Produto";
import NavBar from "../components/NavBar";
import { Grid, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import addCartAction from "../store/actions/ActionCarrinho";

function Produtos() {
  const [products, setProducts] = useState([]);
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
  console.log(carrinho.data);

  return (
    <>
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((item, Key) => (
            <Grid item mt={"5%"} xs={2} sm={4} md={4} >
              <Produto key={Key} item={item} addItemCart={addItemCart} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Produtos;
