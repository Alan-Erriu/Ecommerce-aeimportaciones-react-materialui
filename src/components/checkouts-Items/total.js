import { Box, Button, Typography } from "@mui/material"


const Total = () => {
  return (
    <Box 
    sx={{
      width: "100%",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      xs: "colunm",
      flexDirection:"column",
      
    }}
    >
        <Typography align="center" gutterBottom variant="h4">
        5 items = Total 50$
        </Typography>
        <Button 
       sx={{
        ':hover': {
          bgcolor: 'success.main', 
          
        },
      }}
        variant="contained" color="primary">Comprar</Button>
    </Box>
  )
}

export default Total