import { Button, Paper, styled, Alert, AlertTitle } from "@mui/material";
import React from "react";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Produto = ({ item, addItemCart }) => {

  return (
    <Item>
      <img
        width={"30%"}
        height={"30%"}
        className="ProdImg"
        src={item.image}
        alt={item.title}
      />
      <h2>{item.title}</h2>
      <h1>R$ {item.price}</h1>
      <Button
        onClick={() => addItemCart(item)}
        sx={{ margin: 1, fontWeight: "bold", boxShadow: 5 }}
      >
        <AddShoppingCartTwoToneIcon />
      </Button>
    </Item>
  );
};

export default Produto;
