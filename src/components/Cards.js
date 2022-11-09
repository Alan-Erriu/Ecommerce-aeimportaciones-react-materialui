import  Card  from "./Card"
import "../App.css"




import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Cards() {
  return (
    <Box className="cards" sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card/>
        </Grid>
        
      </Grid>
    </Box>
  );
}
