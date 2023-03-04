import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { TYPES } from "../reducer/recducer";
import { StateContex } from "../contex/CartContex";
import { useContext } from "react";
import { Button } from "@mui/material";

export default function RecipeReviewCard({
  product: { id, product, type, img, price, material, connect, leds, model },
}) {
  const [state,dispatch] = useContext(StateContex);

  const addToCart = () => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  return (
    <Card sx={{ width: 345, height: 700 }}>
      <CardHeader title={product} subheader={type} />

      <CardContent>
        <CardMedia component="img" height="250" image={img} alt="" />
        <Typography variant="h5" color="text.primary">
          Características:
        </Typography>

        <Typography variant="body1" color="-moz-initial">
          <br />
          Serie: {model}
          <br />
          Modelo: {material} <br />
          Conexión: {connect} <br />
          Luces Led: {leds} <br />
        </Typography>

        <Typography variant="body1" color="green">
          ${price}
        </Typography>
        <CardActions>
          <Button
            onClick={addToCart}
            sx={{
              flexGrow: "1",
              ":hover": {
                bgcolor: "success.main",
              },
            }}
            startIcon={<AddShoppingCartIcon />}
            variant="contained"
            color="primary"
          >
            SUMAR AL CARRITO
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
