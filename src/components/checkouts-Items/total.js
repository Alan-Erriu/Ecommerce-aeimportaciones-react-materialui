import { Button, Typography } from "@mui/material"


const Total = () => {
  return (
    <div style={{marginTop:"7rem"}}>
        <Typography align="center" gutterBottom variant="h4">
        <h5>5 items = Total 50$</h5>
        <Button variant="contained" color="secondary">Comprar</Button>
        </Typography>
    </div>
  )
}

export default Total