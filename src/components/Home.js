import CardsHome from "./homeItems/CardsHome";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "80px",
  "@media (max-width:600px)": {
    fontSize: "50px",
  },
  "@media (min-width:600px)": {
    fontSize: "60px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "80px",
  },
};

const Home = () => {
  return (
    <div>
      <Box>
        <Box
          sx={{
            marginTop: "10rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              fontFamily="fantasy"
              fontSize="40px"
              variant="h1"
              color="white"
              textAlign="center"
            >
              A.E <br />
              IMPORTACIONES
            </Typography>
          </ThemeProvider>
        </Box>

        <CardsHome />
      </Box>
    </div>
  );
};

export default Home;
