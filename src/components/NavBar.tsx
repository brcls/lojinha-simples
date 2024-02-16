import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Toolbar>
          <Link to="/carrinho">
            <IconButton>
              <ShoppingCartTwoToneIcon
                fontSize="large"
                sx={{ color: "#003d55" }}
              />
            </IconButton>
          </Link>
        </Toolbar>
        <Toolbar>
          <Link to="/produtos" style={{ textDecoration: "none" }}>
            <Button
              startIcon={
                <StorefrontTwoToneIcon
                  fontSize="large"
                  sx={{ color: "#003d55" }}
                />
              }
            >
              <Typography variant="h5" color={"#003d55"}>
                Lojinha
              </Typography>
            </Button>
          </Link>
        </Toolbar>
        <Toolbar>
          <Link to="/">
            <IconButton>
              <LogoutTwoToneIcon fontSize="large" sx={{ color: "#003d55" }} />
            </IconButton>
          </Link>
        </Toolbar>
      </Stack>
    </AppBar>
  );
}

export default NavBar;
