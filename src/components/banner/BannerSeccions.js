import { CardMedia, Box, Card } from "@mui/material";
import { Link } from "react-router-dom";

const img5 =
  "https://imagenes.compragamer.com/bannerPrincipal/DC_20230207171345_pZhaA6ag.jpg";
const banner = () => {
  return (
     <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>

    <Card sx={{marginTop:"100px", display: "flex",justifyContent: "center", alignItems: "center", height: 200, width: "80%" }}>
      <Link to={"/teclados"}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            
            width: "auto",
            height: "auto",
            display: "flex",
          }}
          image={img5}
          alt={"post.imageLabel"}
        />
      </Link>
    </Card>

     </Box>
  );
};

export default banner;
