import React, { Suspense, lazy } from "react";
import "./App.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Header = lazy(() => delayForDemo(import("./Components/layout/header/header")));
const Main = lazy(() => delayForDemo(import("./Components/layout/main/main")));
const Footer = lazy(() => delayForDemo(import("./Components/layout/footer/footer")));



function delayForDemo<T>(promise: Promise<T>): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(promise);
    }, 2000);
  });
}


function Loading() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Box>
  )
}

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Header />
        <Main />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

