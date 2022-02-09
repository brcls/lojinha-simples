import { Button, Paper, styled} from "@mui/material";
import React from "react";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "450px"
}));

const Produto = ({ item, addItemCart , removeItemCart}) => {

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
      <Button
        onClick={() => removeItemCart(item)}
        sx={{ margin: 1, fontWeight: "bold", boxShadow: 5 }}
      >
        <RemoveShoppingCartTwoToneIcon />
      </Button>
    </Item>
  );
};

export default Produto;
