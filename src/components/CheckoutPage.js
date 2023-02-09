import ItemCart from "./checkoutsItems/ItemCart";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Total from "./checkoutsItems/total";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { StateContex } from "./contex/CartContex";

export default function CheckoutPage() {
  const [state] = useContext(StateContex);
  const{cart}=state
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
            {cart?.map((item,i) => (
              <Grid key={i}  item xs={12} sm={6} md={4} lg={3}>
                <ItemCart key={item.id} item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    );
  }