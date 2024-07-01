import * as React from "react";
import ResponsiveAppBar from "./AppBar";
import ImageSlider from "../main/slider";
function Header() {
  return (
    <div>
      <div className="container">
        <div className="box red-box">
          {/* <MultiActionAreaCard /> */}
          <ImageSlider />
        </div>
        <div className="box blue-box">
          <ResponsiveAppBar />
        </div>
      </div>
    </div>
  );
}
export default Header;
