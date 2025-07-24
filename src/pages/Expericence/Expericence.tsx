import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2022 – Present',
      description: 'Building responsive web apps using React, Tailwind CSS, and TypeScript.',
    },
    {
      role: 'UI/UX Intern',
      company: 'Design Studio',
      duration: 'Jun 2021 – Dec 2021',
      description: 'Created user-friendly interfaces and wireframes using Figma.',
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-4 relative"
            >
              <div className="absolute -left-2 top-1.5 w-4 h-4 bg-blue-500 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {exp.role} - <span className="text-blue-500">{exp.company}</span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{exp.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
