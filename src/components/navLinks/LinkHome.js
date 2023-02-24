import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { TYPES } from "../reducer/recducer";
import { useContext } from "react";
import { StateContex } from "../contex/CartContex";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function ItemCart({
  item: { product, type, img, price, quantity, id },
}) {
  const [state, dispatch] = useContext(StateContex);

  const delFromCart = (all = false) => {
    if ((all = false)) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const addToCart = () => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  return (
    <Card
      className="card"
      sx={{
        width: { xs: "100%", sm: "100%", md: "75%", lg: "50%", xl: "50%" },
        height: {
          xs: "500px",
          sm: "150px",
          md: "150px",
          lg: "150px",
          xl: "150px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
        }}
      >
        <CardMedia
          sx={{ objectFit: "cover" }}
          component="img"
          height="100%"
          image={img}
          alt="zapatilla"
        />
      </CardContent>

      <CardHeader title={product} />
      <CardActions>
        <Typography variant="h5" color="green">
          {`   $${quantity * price}`}
        </Typography>

        <IconButton onClick={delFromCart}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="h5" color="dark">
          {quantity}
        </Typography>
        <IconButton onClick={addToCart}>
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
