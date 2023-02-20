import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { TYPES } from "../reducer/recducer";
import { StateContex } from "../contex/CartContex";
import { useContext } from "react";
import { Button } from "@mui/material";

export default function RecipeReviewCard({
  product: { id, product, type, img, price },
}) {
  const [state, dispatch] = useContext(StateContex);

  const addToCart = () => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  return (
    <Card sx={{ width: 345, height: 600 }}>
      <CardHeader title={product} subheader={type} />

      <CardContent>
        <CardMedia component="img" height="250" image={img} alt="zapatilla" />
        <Typography variant="body1" color="text.primary">
          Lo que tenes que saber de este producto:
        </Typography>
        <Typography variant="body1" color="text.primary">
          <br />
          Tipo de teclado: membrana.
          <br />
          Con conector USB 2.0.
          <br />
          Luces led: No
        </Typography>

        <Typography variant="body1" color="green">
          {price}
        </Typography>
        <CardActions disableSpacing>
          
            <Button
            onClick={addToCart}
            sx={{
              ':hover': {
                bgcolor: 'success.main', // theme.palette.primary.main
                
              },
            }}
            startIcon={<AddShoppingCartIcon/>} 
            variant="contained"
             color="primary">
              SUMAR AL CARRITO
            </Button>
          
        </CardActions>
      </CardContent>
    </Card>
  );
}
