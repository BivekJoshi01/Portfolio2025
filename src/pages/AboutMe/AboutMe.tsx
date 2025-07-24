import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a passionate front-end developer who enjoys building beautiful and functional UIs. 
          I love working with modern technologies like React, Tailwind CSS, and TypeScript. 
          I believe in writing clean, efficient code and continuously learning new tools to improve my skills.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
