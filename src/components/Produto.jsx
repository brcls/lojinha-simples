import { Button, Paper, styled } from "@mui/material";
import React from "react";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "20px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
}));

const Produto = ({ item, addItemCart }) => {
  return (
    <Item>
      <img
        width={"150px"}
        height={"150px"}
        className="ProdImg"
        src={item.image}
        alt={item.title}
      />
      <h3>{item.title}</h3>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ textWrap: "nowrap" }}>R$ {item.price}</h2>
        <Button variant="contained" onClick={() => addItemCart(item)}>
          <AddShoppingCartTwoToneIcon />
        </Button>
      </div>
    </Item>
  );
};

export default Produto;
