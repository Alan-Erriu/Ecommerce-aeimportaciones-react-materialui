import ItemCart from "./checkouts-Items/ItemCart";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Total from "./checkouts-Items/total";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { StateContex } from "./contex/CartContex";

export default function CheckoutPage() {
  const [state] = useContext(StateContex);
  const { cart } = state;
  return (
    <>
      
     

      <Box sx={{ marginTop: "5rem",minHeight:"47vh"}}>
        <Total />
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 0, sm: 10, md: 2, lg: 4, xl: 3 }}
        >
          {cart?.map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={6} lg={4} xl={3}>
              <Box sx={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                xs: "colunm",
              }}>
              
              <ItemCart key={item.id} item={item} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
