import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "./images/novedades/1.png",
    title: "Big City",
    description: "Este juego es una simulación de una ciudad grande.",
  },
  {
    src: "./images/novedades/2.png",
    title: "Red Dead Redemption 2",
    description: "Este juego es para los amantes de los westerns.",
  },
  {
    src: "./images/novedades/3.png",
    title: "Legacy of Castlevania",
    description: "Este juego es para los amantes de los vampiros.",
  },
  {
    src: "./images/novedades/4.png",
    title: "Vrising",
    description: "Este juego es para los amantes de los zombies.",
  },
];

const Novedades = () => {
  return (
    <Box sx={{ width: "90%", margin: "auto", marginTop: 4 }}>
      <Box sx={{ position: "relative", textAlign: "center", mb: 3 }}>
        <Typography
          variant="h4"
          id="novedades"
          sx={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#800011",
            color: "#fff",
            borderRadius: 4,
          }}
        >
          Novedades
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          backgroundImage: "url('./images/2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 2,
          borderRadius: 4,
          minHeight: "300px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 2,
            width: { xs: "100%", sm: "100%", md: "50%" },
            alignItems: "center",
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                "&:hover .info": {
                  opacity: 1,
                },
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                style={{ width: "100%", borderRadius: 8 }}
              />
              <Box
                className="info"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  padding: 2,
                  borderRadius: 8,
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {image.title}
                </Typography>
                <Typography variant="body2">{image.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Novedades;
