import  Card  from "./Card"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import products from "../data/products-data"

export default function Cards() {
  return (
    <Box className="cards" sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
         products.map(product=>( 
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card key={product.id} product={product}/>
        </Grid>
         ))
        }
        
     
        
      </Grid>
    </Box>
  );
}
