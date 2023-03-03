import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const CartIsEmpty = () => {
  return (
    <Box
      sx={{
        marginTop: "5rem",
        minHeight: "47vh",
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        xs: "colunm",
        flexDirection: "column",
      }}
    >
      <Typography align="center" gutterBottom variant="h4" color="white">
        No hay productos en el carrito
      </Typography>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            ":hover": {
              bgcolor: "primary.main",
            },
          }}
          variant="contained"
          color="success"
        >
          Seguir comprando
        </Button>
      </Link>
    </Box>
  );
};

export default CartIsEmpty;
