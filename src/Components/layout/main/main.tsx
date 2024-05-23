import * as React from "react";
import { AspectRatio } from "@mui/icons-material";
import { Typography } from "@mui/material";
import MasPoulares from "./MasPopulares";
import Categorias from "./Categorías";
function Main() {
  return (
    <div>
      <MasPoulares />
      <Categorias />
    </div>
  );
}
export default Main;
