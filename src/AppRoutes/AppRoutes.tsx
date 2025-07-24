import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../components/LayoutC/AppLayout";

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index />
          <Route path="about-me" />
          <Route path="exprience" />
          <Route path="education" />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
