import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function MultiActionAreaCard({
  offert: { id, product, img, price, link },
}) {
  return (
    <CardActionArea sx={{ width: 450, height: 420, marginTop: 10 }}>
      <Card>
        <CardContent>
          <Link to={link} style={{ textDecoration: "none" }}>
            <CardMedia component="img" height="280" image={img} alt={product} />
            <Typography
              color="grey"
              textAlign={"center"}
              gutterBottom
              variant="h2"
              fontSize="35px"
            >
              {product} Desde Los
            </Typography>
            <Typography
              fontFamily="fantasy"
              color="green"
              textAlign={"center"}
              gutterBottom
              variant="h4"
              fontSize="30px"
            >
              {price}$
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
