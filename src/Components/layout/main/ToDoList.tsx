import React, { useState, useReducer, useMemo, useCallback } from "react";
import { createTheme } from "@mui/material/styles";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
  },
});

const ToDoList = () => {
  const initialState = [
    { id: 1, tarea: "Hacer la cama", completada: false },
    { id: 2, tarea: "Lavar los platos", completada: false },
    { id: 3, tarea: "Cocinar", completada: false },
  ];

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length + 1,
            tarea: action.payload,
            completada: false,
          },
        ];
      case "delete":
        return state.filter((tarea: any) => tarea.id !== action.payload);
      case "complete":
        return state.map((tarea: any) =>
          tarea.id === action.payload ? { ...tarea, completada: true } : tarea
        );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [tarea, setTarea] = useState("");

  const agregarTarea = useCallback(() => {
    dispatch({ type: "add", payload: tarea });
    setTarea("");
  }, [tarea]);

  const eliminarTarea = useCallback(
    (id: Number) => {
      dispatch({ type: "delete", payload: id });
    },
    [state]
  );

  const tareasCompletadas = useMemo(
    () => state.filter((tarea: any) => tarea.completada).length,
    [state]
  );

  return (
    <Box sx={{ paddingRight: 30, paddingLeft: 30 }}>
      <Box sx={{ padding: 2, backgroundColor: "#ffff" }}>
        <Typography variant="h4">Tarea por hacer</Typography>
        <Typography variant="body1">
          Tareas completadas: {tareasCompletadas}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <TextField
            label="Nueva Tarea"
            variant="outlined"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            sx={{ marginRight: 2 }}
          />
          <Button variant="contained" color="primary" onClick={agregarTarea}>
            Agregar
          </Button>
        </Box>
        <List>
          {state.map((tarea: any) => (
            <ListItem
              key={tarea.id}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <ListItemText primary={tarea.tarea} />
              <Box>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => eliminarTarea(tarea.id)}
                  sx={{ marginRight: 1 }}
                >
                  Eliminar
                </Button>
                <Button
                  variant="contained"
                  color={tarea.completada ? "success" : "primary"}
                  onClick={() =>
                    dispatch({ type: "complete", payload: tarea.id })
                  }
                  disabled={tarea.completada}
                >
                  {tarea.completada ? "Completada" : "Incompleta"}
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ToDoList;
