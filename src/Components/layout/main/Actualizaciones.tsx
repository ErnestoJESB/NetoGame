import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  {
    src: "./images/actualizaciones/1.png",
    title:
      "Minecraft es un juego de construcción y aventuras en un mundo abierto.",
    description:
      "Creatividad ilimitada, mundos generados proceduralmente, modificación extensiva con mods, modo multijugador, supervivencia contra enemigos nocturnos.",
    date: "Hace 2 días",
  },
  {
    src: "./images/actualizaciones/2.png",
    title:
      "Fortnite es un juego de batalla real en el que 100 jugadores luchan por ser el último en pie.",
    description:
      "Construcción de estructuras, recolección de recursos, armas y objetos, skins y bailes.",
    date: "Hace 1 semana",
  },
  {
    src: "./images/actualizaciones/3.png",
    title:
      "Among Us es un juego de deducción social en el que los jugadores deben encontrar al impostor entre ellos.",
    description:
      "Mecánicas de juego simples, partidas rápidas, personalización de personajes, mapas y tareas.",
    date: "Hace 3 semanas",
  },
];

const Actualizaciones = () => {
  return (
    <Box sx={{ width: "90%", margin: "auto", marginTop: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography
          id="actualizaciones"
          variant="h5"
          sx={{ color: "#fff", marginRight: 1 }}
        >
          ACTUALIZACIONES
        </Typography>
        <ArrowForwardIosIcon sx={{ color: "#fff" }} />
      </Box>
      {images.map((image, index) => (
        <Box key={index}>
          <Grid
            container
            sx={{
              marginBottom: 2,
              padding: 2,
              borderRadius: 4,
              alignItems: "center",
              "@media (max-width: 768px)": {
                flexDirection: "column",
              },
            }}
          >
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: { xs: 2, md: 0 },
                }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: 8,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#89878B", marginBottom: 1 }}
                >
                  {image.date}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>
                  {image.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#89878B" }}>
                  {image.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              height: "2px",
              backgroundColor: "#fff",
              width: "80%",
              marginBottom: 2,
              margin: "auto",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Actualizaciones;
