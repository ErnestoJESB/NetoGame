import { useState, useRef } from 'react';
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

export default function Cronometro() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <Box>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
      </Box>
      <Box>
        <Typography variant="h2">{secondsPassed.toFixed(2)}s</Typography>
      </Box>
    </>
  );
}