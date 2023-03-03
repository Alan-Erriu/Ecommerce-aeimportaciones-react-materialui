import {
  Box,
  Button,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useContext } from "react";
import { StateContex } from "../contex/CartContex";

const Total = () => {
  const [state] = useContext(StateContex);
  const { cart } = state;

  const getTotal = cart.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        xs: "colunm",
        flexDirection: "column",
        marginBottom: "3rem",
      }}
    >
      <Card
      
        sx={{
          width: { xs: "100%", sm: "100%", md: "75%", lg: "50%", xl: "50%" },
          height: 100,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CardContent
          sx={{
            display: "flex",

            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">Total: ${getTotal.toFixed(3)}</Typography>
          <Button
            sx={{
              
              ":hover": {
                bgcolor: "success.main",
              },
              width: "300px",
              marginBottom: "5px",
            }}
            variant="contained"
            color="primary"
          >
            comprar
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Total;
