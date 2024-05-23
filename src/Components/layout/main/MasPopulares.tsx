import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Padding } from "@mui/icons-material";

const images = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/6.png",
];

const MasPopulares = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: "90%", margin: "auto", marginTop: 4 }}>
      <Box sx={{ position: "relative", textAlign: "center", mb: 3 }}>
        {/* <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "60%",
            height: "50%",
            backgroundColor: "#C25252",
            borderRadius: 4,
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        /> */}
        <Typography
          variant="h4"
          sx={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#800011",
            color: "#fff",
            borderRadius: 4,
          }}
        >
          Más populares
        </Typography>
      </Box>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ padding: 1 }}>
            <Box
              component="img"
              src={image}
              alt={`Slide ${index}`}
              sx={{
                width: "90%",
                borderRadius: 8,
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MasPopulares;
