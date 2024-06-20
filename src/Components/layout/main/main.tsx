import * as React from "react";
import MasPoulares from "./MasPopulares";
import Categorias from "./Categorías";
import Novedades from "./Novedades";
import { Box } from "@mui/system";
import Actualizaciones from "./Actualizaciones";
import Avengers from "./Avengers";
import Formulario from "./Formulario";
import Counter from "./UseReducer";

function Main() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ marginBottom: 4 }}>
        <MasPoulares />
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <Categorias />
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <Novedades />
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <Actualizaciones />
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <Formulario />
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <Counter />
      </Box>
    </Box>
  );
}
export default Main;
