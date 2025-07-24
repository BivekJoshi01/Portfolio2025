// App.tsx
import React from "react";
import "./App.css";
import DotGrid from "./components/DotGrid";
import AppRoutes from "./AppRoutes/AppRoutes";

const App: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#03000a",
        minHeight: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <DotGrid
        dotSize={1}
        gap={25}
        baseColor="rgba(200,200,255,0.3)"
        activeColor="rgba(100,150,255,1)"
        proximity={100}
        shockStrength={0.7}
        resistance={0.5}
      />

      {/* Foreground content */}
      <div style={{ position: "relative", zIndex: 1, color: "white" }}>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
