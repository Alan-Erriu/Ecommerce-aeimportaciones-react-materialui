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
    <Card sx={{ width:450 ,height: 350, marginTop: 10}}>
      <CardActionArea>
        <Link to={link} style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt={product}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Desde los {price}
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
    
    </Card>
  );
}
