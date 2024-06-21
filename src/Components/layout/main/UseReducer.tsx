import React, { useReducer } from "react";
import { Button, Typography, Container } from "@mui/material";

const initialState = { count: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Count: {state.count}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "increment" })}
        style={{ margin: "5px" }}
      >
        Incrementa
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch({ type: "decrement" })}
        style={{ margin: "5px" }}
      >
        Decrementa
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "reset" })}
        style={{ margin: "5px" }}
      >
        Resetea
      </Button>
    </Container>
  );
}

export default Counter;
