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
        maxWidth: "1200px",
        "@media (max-width: 600px)": {
          height: "100vh",
        },
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
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          "@media (max-width: 600px)": {
            left: "5px",
          },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          "@media (max-width: 600px)": {
            right: "5px",
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
