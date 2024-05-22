import * as React from "react";
import ResponsiveAppBar from "./AppBar";
import { AspectRatio } from "@mui/icons-material";
import { Typography } from "@mui/material";
import MultiActionAreaCard from "../main/card";
function Header() {
  return (
    <div>
      <div className="container">
        <div className="box red-box">
          <MultiActionAreaCard />
        </div>
        <div className="box blue-box">
          <ResponsiveAppBar />
        </div>
      </div>
    </div>
  );
}
export default Header;
