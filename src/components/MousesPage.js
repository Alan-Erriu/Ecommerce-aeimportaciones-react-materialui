import SeccionCard from "./seccionsItems/SeccionCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { StateContex } from "../components/contex/CartContex";
import { useContext } from "react";

const MousesPage = () => {
  const [state,dispatch] = useContext(StateContex);
  const { products } = state;

  const mouses = products.filter((mouses) => mouses.type === "Mouses");

  return (
    <>
      <Box sx={{ marginTop: "8rem" }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 0, sm: 10, md: 2, lg: 4, xl: 3 }}
        >
          <Grid item xs={12}></Grid>
          {mouses.map((product) => (
            <Grid
              key={product.id}
              product={product}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
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
                <SeccionCard key={product.id} product={product} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MousesPage;
