import React from "react";
import "./App.css";
import DotGrid from "./components/DotGrid";
import AppRoutes from "./AppRoutes/AppRoutes";

const App: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        background: "black",
        minHeight: "100vh",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <DotGrid
        dotSize={1}
        gap={18}
        baseColor="rgba(180, 180, 255, 0.2)"
        activeColor="rgba(255, 255, 255, 0.9)"
        hoverRadius={150}
      />

      {/* Foreground content with scroll */}
      <div style={{ 
        position: "relative", 
        zIndex: 1, 
        color: "white",
        height: "100vh",
        overflowY: "auto" 
      }}>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;