import {  CardMedia, Box } from "@mui/material";
import { Link } from "react-router-dom";


const img5 =
  "https://imagenes.compragamer.com/bannerPrincipal/DC_20230207171345_pZhaA6ag.jpg";
const banner = () => {
  return (
       <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      
        
        <Box
      sx={{ display: "flex", }}
    >
        <Link to={"/teclados"}>
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              marginTop: "100px",
              width: "100%",
              height: "auto",
              display: "flex",
            }}
            image={img5}
            alt={"post.imageLabel"}
          />
        </Link>
    </Box>
        
      
      </Box>
  );
};

export default banner;