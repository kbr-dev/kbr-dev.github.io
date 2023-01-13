import "./App.css";
import { matrixRain } from "./utils/canvasUtils";
import React from "react";

function App() {
  React.useEffect(() => {
    matrixRain();
  }, []);
  return (
    <div>
      <canvas></canvas>
    </div>
  );
}

export default App;
