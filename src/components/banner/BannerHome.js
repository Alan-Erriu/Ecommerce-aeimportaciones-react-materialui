import {  CardMedia, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import bannerImg from "../assets/banner2.png"
import banner1 from "../assets/banner.png"



const banner = () => {
  if (window.innerWidth >700){

    return (
         <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",height:"150px",marginTop:"20rem"}}>
        
          
          <Link to={"/teclados"}>
            <CardMedia
              component="img"
              sx={{
                objectFit: "cover",
                marginTop: "100px",
                width: "100%",
                height: "500px",
                display: "flex",
                
              }}
              
              image={bannerImg}
              
              alt={"post.imageLabel"}
            />
          </Link>
              
     
          
        
        </Box>
    );
  }else{
    return (
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",height:"150px",marginTop:"10rem"}}>
     
       
       <Link to={"/teclados"}>
         <CardMedia
           component="img"
           sx={{
             objectFit: "cover",
             marginTop: "100px",
             width: "100%",
             height: "500px",
             display: "flex",
             
           }}
           
           image={banner1}
           
           alt={"post.imageLabel"}
         />
       </Link>
           
  
       
     
     </Box>
 );
  }
  
  }

export default banner;