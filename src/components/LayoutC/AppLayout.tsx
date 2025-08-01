import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavbarC from "../NavbarC/NavbarC";
import AboutMe from "../../pages/AboutMe/AboutMe";
import Expericence from "../../pages/Expericence/Expericence";
import Education from "../../pages/Education/Education";

const AppLayout: React.FC = () => {
  const location = useLocation();

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToSection = () => {
      if (location.pathname.includes("about-me")) {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      } else if (location.pathname.includes("exprience")) {
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
      } else if (location.pathname.includes("education")) {
        educationRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToSection();
  }, [location]);

  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 10,marginBottom:"95px" }}>
        <NavbarC />
      </div>

      <div ref={aboutRef} style={{backgroundColor:''}}>
        <AboutMe />
      </div>

      <div ref={experienceRef}>
        <Expericence />
      </div>

      <div ref={educationRef}>
        <Education />

      </div>
    </div>
  );
};

export default AppLayout;
