import React from "react";
import BivekImage from "../../assets/BivekImage.svg";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center gap-10  shadow-lg rounded-2xl p-8 md:p-12 transition-colors duration-500">
          {/* Image */}
          <div className="w-152 h-96 rounded-xl overflow-hidden border-4 border-indigo-500 shadow-md">
            <img
              // src={BivekImage}
              alt="Bivek Joshi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              {t("greeting")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate front-end developer who enjoys building beautiful
              and functional UIs. I love working with modern technologies like{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-300">React</span>,{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-300">Tailwind CSS</span>, and{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-300">TypeScript</span>.
              <br />
              <br />
              I believe in writing clean, efficient code and constantly improving by learning new tools and techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
