import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const images = [
  "./images/1.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/6.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        margin: "auto",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box></Box>
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s ease-in-out",
          transform: isAnimating ? "scale(0.95)" : "scale(1)",
          "@media (max-width: 600px)": {
            height: "100%",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "50px", sm: "100px", md: "150px" },
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
          width: "100%",
          fontFamily: "Arial, sans-serif",
          h2: {
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
            fontWeight: "bold",
            margin: "0",
          },
          p: {
            fontSize: { xs: "1.2rem", sm: "3rem", md: "2rem" },
            margin: "0",
            lineHeight: { xs: "1.4", sm: "1.6", md: "1.8" },
          },
          button: {
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#800011",
            color: "white",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#C25252",
            },
          },
        }}
      >
        <h2>NetoGame</h2>
        <p>
          Tu destino para juegos emocionantes y noticias de última hora. Únete a
          nuestra comunidad y vive la pasión por el gaming.
        </p>
        <Box mt={{ xs: 2, sm: 3, md: 4 }}>
          {" "}
          {/* Ajuste del margen superior en diferentes dispositivos */}
          <button style={{ marginRight: "10px" }}>Más info</button>
          <button style={{ marginLeft: "10px" }}>Novedades</button>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlider;
