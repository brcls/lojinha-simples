import React from 'react';
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
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
        alignItems="baseline"
        spacing={2}
      >
        <Toolbar>
          <Link to="/carrinho">
            <ShoppingCartTwoToneIcon
              fontSize="large"
              sx={{ color: "#003d55" }}
            />
          </Link>
        </Toolbar>
        <Toolbar>
          <Link to="/produtos">
            <StorefrontTwoToneIcon fontSize="large" sx={{ color: "#003d55" }} />
          </Link>
          <Link to="/produtos" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              align="center"
              sx={{
                ml: "7%",
                color: "#003d55",
                fontFamily: "Roboto",
                mt: "1%",
              }}
            >
              Lojinha
            </Typography>
          </Link>
        </Toolbar>
        <Toolbar>
          <Link to="/">
            <LogoutTwoToneIcon fontSize="large" sx={{ color: "#003d55" }} />
          </Link>
        </Toolbar>
      </Stack>
    </AppBar>
  );
}

export default NavBar;
