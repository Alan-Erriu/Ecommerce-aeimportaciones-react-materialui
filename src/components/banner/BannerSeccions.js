import { CardMedia, Box, Card } from "@mui/material";
import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.png"
const img5 =
  "https://imagenes.compragamer.com/bannerPrincipal/DC_20230207171345_pZhaA6ag.jpg";
const banner = () => {
  return (
     <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",mb:"7rem"}}>

    <Card sx={{marginTop:"100px", display: "flex",justifyContent: "center", alignItems: "center", height:{xs:"400px",sm:"300px"}, width:{xs:"98%"} }}>
      <Link to={"/teclados"}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            
            width: "auto",
            height: "auto",
            display: "flex",
          }}
          image={bannerImg}
          alt={"post.imageLabel"}
        />
      </Link>
    </Card>

     </Box>
  );
};

export default banner;
