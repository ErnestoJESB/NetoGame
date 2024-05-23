import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const categories = [
  { src: "./images/1.png", label: "ACCIÓN" },
  { src: "./images/2.png", label: "PLATFORM" },
  { src: "./images/3.png", label: "SIMULACIÓN" },
  { src: "./images/4.png", label: "CARRERAS" },
  { src: "./images/5.png", label: "SHOOTING" },
  { src: "./images/6.png", label: "RPG" },
];

const Categorias = () => {
  return (
    <Box sx={{ width: "90%", margin: "auto", marginTop: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography variant="h5" sx={{ color: "#fff", marginRight: 1 }}>
          CATEGORÍAS
        </Typography>
        <ArrowForwardIosIcon sx={{ color: "#fff" }} />
      </Box>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={category.src}
                alt={category.label}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  backgroundColor: "#8B0000",
                  color: "#fff",
                  textAlign: "center",
                  padding: "5px 0",
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                }}
              >
                <Typography variant="body1">{category.label}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categorias;
