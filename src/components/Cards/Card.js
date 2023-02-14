import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { TYPES } from "../reducer/recducer";
import { StateContex } from "../contex/CartContex";
import { useContext } from "react";

export default function RecipeReviewCard({
  product: { id, product, type, img, price },
}) {
  const [state, dispatch] = useContext(StateContex);

  const addToCart = () => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  return (
    <Card
      
      sx={{ width: 345, height: 600}}
    >
      <CardHeader
        // aca va el precio

        title={product}
        subheader={type}
      />
      {/* aca va la imagen */}
      <CardContent>
      <CardMedia component="img" height="250" image={img} alt="zapatilla" />
        <Typography variant="body1" color="text.primary">
          Lo que tenes que saber de este producto
         <ul>
          <li>Tipo de teclado: membrana.</li>
          <li>Con conector USB 2.0.</li>
          <li>Luces led: No</li>
          </ul>
        </Typography>
      
      <CardActions disableSpacing>
        <IconButton onClick={addToCart}>
          <AddShoppingCartIcon />
        </IconButton>
        <Typography variant="body1" color="green">
          {price}
        </Typography>
      </CardActions>
      </CardContent>
      
    </Card>
  );
}
