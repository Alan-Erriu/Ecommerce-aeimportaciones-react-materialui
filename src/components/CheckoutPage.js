import ItemCart from "./checkoutsItems/ItemCart";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Total from "./checkoutsItems/total";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { StateContex } from "./contex/CartContex";

export default function CheckoutPage() {
  const [state, dispatch] = useContext(StateContex);
  const{basket}=state
    return (
      <>
        <Box className="cards" sx={{ width: "100%" }}>
          <Grid item xs={12}>
            <Typography align="center" gutterBottom variant="h4"></Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography align="center" gutterBottom variant="h4">
              <Total />
            </Typography>
          </Grid>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {basket?.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ItemCart key={product.id} product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    );
  }