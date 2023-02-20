import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/logo.jpg";
import { Avatar, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { StateContex } from "./contex/CartContex";
import { useContext } from "react";

function ResponsiveAppBar() {
  const [state, dispatch] = useContext(StateContex);
  const { cart } = state;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Avatar
                alt="ae.importaciones"
                src={logo}
                sx={{ width: 56, height: 56 }}
              />
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <MenuItem component={Link} to={"/"}>
                  Home
                </MenuItem>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <MenuItem component={Link} to={"/teclados"}>
                  Productos
                </MenuItem>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <MenuItem component={Link} to={"/carrito"}>
                  Carrito
                </MenuItem>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <Avatar
                alt="Remy Sharp"
                src={logo}
                sx={{ width: 56, height: 56 }}
              />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/teclados" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Teclados
              </Button>
            </Link>
            <Link to="/mouses" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Mouses
              </Button>
            </Link>
            <Link to="/accesorios" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Accesorios
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="carrito">
              
                  <Link
                    to="/carrito"
                    style={{ textDecoration: "none" }}
                  >
                <Badge badgeContent={cart?.length} color="secondary">
                    <Button color="success">

                    <ShoppingCartIcon />
                    </Button>
                </Badge>
                  </Link>
              
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
