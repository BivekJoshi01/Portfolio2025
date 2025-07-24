import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Education</h2>

      <div className="space-y-6">
        {/* Example education item */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-700 italic">University of Example — 2015 - 2019</p>
          <p className="mt-2 text-gray-600">
            Graduated with honors, specializing in software engineering and data structures. Participated in multiple coding competitions and tech clubs.
          </p>
        </div>

        {/* Another item */}
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-xl font-semibold text-gray-900">High School Diploma</h3>
          <p className="text-gray-700 italic">Example High School — 2011 - 2015</p>
          <p className="mt-2 text-gray-600">
            Focused on science stream, excelled in mathematics and physics. Active member of the robotics club.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
