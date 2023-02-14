import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { TYPES } from "../reducer/recducer";
import { useContext } from "react";
import { StateContex } from "../contex/CartContex";
import { height } from "@mui/system";

export default function ItemCart({ item: { product, type, img, price,quantity,id } }) {
  const [state, dispatch] = useContext(StateContex);

  const delFromCart = (all = false) => {

    if (all = false) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  return (
    <Card className="card" sx={{ width: 345, height:500}}>
      <CardContent>
      <CardHeader title={product} subheader={type} />
      <CardMedia component="img" height="250" image={img} alt="zapatilla" />
      <CardActions disableSpacing>
        <IconButton onClick={delFromCart}>
          <DeleteIcon />
        </IconButton>
        <Typography variant="body2" color="green">
          {price}
           
        </Typography>
        <Typography variant="body4" color="text.secondary">
        { `X ${quantity}` }
           
        </Typography>
      </CardActions>
      </CardContent>
    </Card>
  );
}
