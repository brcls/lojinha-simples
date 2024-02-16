import { Button, Paper, styled } from "@mui/material";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import RemoveShoppingCartTwoToneIcon from "@mui/icons-material/RemoveShoppingCartTwoTone";
import { IProdutoData } from "../interfaces/IProdutoData";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addItem, removeItem, cartState } from "../store/cartSlice";
import { IAlertControl } from "../pages/Produtos";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "50px 20px 20px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
}));

interface IProdutoCardProps {
  produto: IProdutoData;
  isCartView?: boolean;
  setAlertControl?: React.Dispatch<React.SetStateAction<IAlertControl>>;
}

type ButtonColorType =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

const ProdutoCard = ({
  produto,
  isCartView = false,
  setAlertControl,
}: IProdutoCardProps) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartState);

  function addItemCart(): void {
    const isExist = cart.products.find((item) => item.id === produto.id);

    if (isExist) return;

    console.log("entro");

    const newAlert: IAlertControl = {
      message: "Produto adicionado ao carrinho",
      severity: "success",
      show: true,
    };

    if (setAlertControl) {
      setAlertControl(newAlert);
      setTimeout(() => {
        setAlertControl({ ...newAlert, show: false });
      }, 2000);
    }
    dispatch(addItem(produto));
  }

  function removeItemCart(): void {
    const newAlert: IAlertControl = {
      message: "Produto removido do carrinho",
      severity: "error",
      show: true,
    };

    if (setAlertControl) {
      setAlertControl(newAlert);
      setTimeout(() => {
        setAlertControl({ ...newAlert, show: false });
      }, 2000);
    }
    dispatch(removeItem(produto));
  }

  function handlePressButton() {
    if (isCartView) removeItemCart();
    else addItemCart();
  }

  const buttonColor: ButtonColorType = isCartView ? "error" : "primary";

  return (
    <Item>
      <img
        width={"150px"}
        height={"150px"}
        className="ProdImg"
        src={produto.image}
        alt={produto.title}
      />
      <h3>{produto.title}</h3>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ textWrap: "nowrap" }}>R$ {produto.price}</h2>
        <Button
          color={buttonColor}
          variant="contained"
          onClick={() => handlePressButton()}
        >
          {isCartView ? (
            <RemoveShoppingCartTwoToneIcon />
          ) : (
            <AddShoppingCartTwoToneIcon />
          )}
        </Button>
      </div>
    </Item>
  );
};

export default ProdutoCard;
