import * as React from "react";
import Container from "@mui/material/Container";
import logo from "./assets/logo.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Avatar, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function GuestFooter() {
  return (
    
    <Paper 
    sx={{marginTop: '250px', bottom: 0}} component="footer" square variant="outlined"
    >
    <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
            
          }}
        >
          <Typography variant="caption" color="initial" textAlign="center">
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <GitHub />
            </IconButton>
            <IconButton>Portafolio</IconButton>
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="caption" color="initial" textAlign="center">
            Copyright ©2023. @ Desarrollado por Alan Erriu
          </Typography>
          <Avatar alt="Remy Sharp" src={logo} sx={{ width: 56, height: 56 }} />
        </Box>
      </Container>
    </Paper>
    
  );
}
