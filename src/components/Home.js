import BannerHome from "./banner/BannerHome"
import CardsHome from "./homeItems/CardsHome"
import Typography from '@mui/material/Typography'
import { Box } from "@mui/system"
const Home = () => {
  return (
    <div>
       <Box>
      <Typography sx={{marginTop:"10rem",display:"flex",justifyContent:"center",fontFamily:"cursive",fontSize:"40px"}} variant="h1" color="white" textAlign="center">A.E <br/>IMPORTACIONES</Typography>
        
        <CardsHome/>
        </Box>
    </div>
  )
}

export default Home