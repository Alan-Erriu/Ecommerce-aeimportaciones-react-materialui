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
import { actionTypes } from "../reducer/recducer";
import { StateContex, useStateValue } from "../contex/CartContex";
import { useContext } from "react";
export default function RecipeReviewCard({ product: { id, product, type, img, description, price },}) {
  
  const [state, dispatch] = useContext(StateContex);
  
  
  const addToBasket=()=>{
    dispatch({
     type:actionTypes.ADD_TO_BASKET,
     item:{
     id:id,
     product:product,
     img:img,
     price:price,
     type:type}})
                      }
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardHeader
        // aca va el precio
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
        title={product}
        subheader={type}
      />
      {/* aca va la imagen */}
      <CardMedia component="img" height="250" image={img} alt="zapatilla" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={addToBasket}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
