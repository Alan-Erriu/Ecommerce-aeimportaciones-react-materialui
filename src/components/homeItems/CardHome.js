import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function MultiActionAreaCard({
    offert: { id, product, img, price,link }
}) {
  return (
    <Card sx={{ width:450 ,height: 420, marginTop: 10,}}>
          <CardContent>
      <CardActionArea>
        <Link to={link} style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height="280"
          image={img}
          alt={product}
          
        />
          <Typography textAlign={"center"} gutterBottom variant="h5" component="div">
            {product}  Desde los 
          </Typography>
          <Typography textAlign={"center"} gutterBottom variant="h4" component="div">
            {price}$
          </Typography>
         
        </Link>
      </CardActionArea>
        </CardContent>
    
    </Card>
  );
}
