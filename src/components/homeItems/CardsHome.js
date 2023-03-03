import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardHome from "../homeItems/CardHome";
import { StateContex } from "../contex/CartContex";
import { useContext } from "react";

export default function Cards() {
  const [state] = useContext(StateContex);
  const { offers } = state;
  return (
    <Box
      sx={{ marginTop: "6rem", alignItems: "center", justifyContent: "center" }}
    >
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 0, sm: 10, md: 2, lg: 0, xl: 0 }}
      >
        {offers.map((offert) => (
          <Grid
            key={offert.id}
            offert={offert}
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={4}
          >
            <Box
              sx={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                xs: "colunm",
              }}
            >
              <CardHome key={offert.id} offert={offert} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
