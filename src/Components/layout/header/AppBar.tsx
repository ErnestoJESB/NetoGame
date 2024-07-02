import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import LoginGoogle from "./LoginGoogle";

const pages = ["Más populares", "Categorias", "Novedades"];
const ids = ["masPopulares", "categorias", "novedades"];

function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(false); // Estado para el menú desplegable

  const handleToggleDrawer = () => {
    setOpen(!open); // Cambiar el estado del menú desplegable
  };

  const handleCloseDrawer = () => {
    setOpen(false); // Cerrar el menú desplegable
  };

  return (
    <AppBar
      position="static"
      sx={{
        zIndex: 2,
        backgroundColor: "#000000", // Fondo negro
        color: "#FFFFFF", // Texto blanco
      }}
    >
      <Container className="head" maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NetoGame
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            {/* Icono del menú */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleDrawer} // Abrir/cerrar menú desplegable
              color="inherit"
              sx={{ display: { xs: "block", md: "none" } }} // Mostrar en dispositivos móviles
            >
              <MenuIcon />
            </IconButton>
            {/* Menú desplegable */}
            <Drawer
              anchor="left" // Alineación a la izquierda
              open={open} // Estado de apertura
              onClose={handleCloseDrawer} // Cerrar menú
              sx={{
                backdropFilter: "blur(8px)", // Fondo desenfocado
                "@media (max-width: 600px)": {
                  position: "fixed", // Para dispositivos móviles, fija la posición
                },
              }}
            >
              {/* Elementos de menú */}
              <Box
                sx={{
                  width: 200,
                  height: "100%",
                  color: "#ffffff",
                  backgroundColor: "#000000",
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={handleCloseDrawer}>
                    {/* Enlace a la página */}
                    <Typography
                      component="a"
                      href={`#${ids[index]}`}
                      textAlign="center"
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>

          {/* Título de la aplicación */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NetoGame
          </Typography>

          {/* Botones de las páginas */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                component="a"
                href={`#${ids[index]}`}
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "capitalize",
                  flexDirection: "column",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                  flexGrow: 1,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Botón de usuario */}
          <LoginGoogle />
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
