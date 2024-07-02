import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        bottom: "0",
        paddingTop: 2,
        paddingBottom: 2,
        width: "100%",
        zIndex: "100",
      }}
    >
      <Typography variant="body2">
        © 2024 Todos los derechos reservados.
      </Typography>
      <Box sx={{ marginTop: 1 }}>
        <IconButton aria-label="Facebook" sx={{ color: "#fff" }}>
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="Twitter" sx={{ color: "#fff" }}>
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="Instagram" sx={{ color: "#fff" }}>
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="LinkedIn" sx={{ color: "#fff" }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
