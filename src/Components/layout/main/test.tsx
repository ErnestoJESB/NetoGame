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
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
          width: "100%",
        }}
      >
        <Box>
          <IconButton
            onClick={prevSlide}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
              marginRight: "10px",
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
              marginLeft: "10px",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
        <h2>Título</h2>
        <p>Subtítulo</p>

        <Box mt={2}>
          <button style={{ marginRight: "10px" }}>Botón 1</button>
          <button style={{ marginLeft: "10px" }}>Botón 2</button>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlider;
