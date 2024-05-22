import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image="https://media.istockphoto.com/id/1290727524/es/foto/joven-que-lleva-auriculares-y-jugar-videojuegos-de-ordenador-en-l%C3%ADnea-inicio-aislado-para.jpg?s=1024x1024&w=is&k=20&c=CtCO_4oKnV8Yfvj19lFBikns-ePQ6PWd23-ZpAozuug="
          alt="video game room"
        />
      </CardActionArea>
    </Card>
  );
}
