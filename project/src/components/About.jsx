import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          About This Project
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Task Management Dashboard built using React & Tailwind CSS.
        </p>
      </div>

      {/* About Project */}
      <div className="bg-white shadow-lg rounded-3xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-5">
          Project Description
        </h2>

        <p className="text-lg text-gray-700 leading-8">
          This Task Management Dashboard helps users manage their
          daily tasks efficiently. Users can track pending,
          completed, failed and total tasks while monitoring their
          productivity and upcoming deadlines.
        </p>

      </div>

      {/* Features */}
      <div className="bg-white shadow-lg rounded-3xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-5">
          Features
        </h2>

        <ul className="space-y-3 text-lg">
          <li>✔ User Login System</li>
          <li>✔ Dashboard Overview</li>
          <li>✔ Task Management</li>
          <li>✔ Productivity Tracking</li>
          <li>✔ Upcoming Deadlines</li>
          <li>✔ Recent Tasks Section</li>
          <li>✔ Responsive UI</li>
          <li>✔ Local Storage Support</li>
        </ul>

      </div>

      {/* Technologies Used */}
      <div className="bg-white shadow-lg rounded-3xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-5">
          Technologies Used
        </h2>

        <div className="grid grid-cols-2 gap-5 text-lg">

          <p>⚛ React JS</p>
          <p>🎨 Tailwind CSS</p>
          <p>🛣 React Router DOM</p>
          <p>💻 JavaScript</p>
          <p>📄 HTML5</p>
          <p>🎨 CSS3</p>

        </div>

      </div>

      {/* Developer */}
      <div className="bg-white shadow-lg rounded-3xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-5">
          Developer
        </h2>

        <p className="text-lg">
          Name : <span className="font-semibold">Krishna Manglik</span>
        </p>

        <p className="text-lg mt-2">
          Branch : CSE - AIML
        </p>

        <p className="text-lg mt-2">
          College : ABES Engineering College
        </p>

        <p className="text-lg mt-2">
          Passionate about Web Development, DSA and AI/ML.
        </p>

      </div>

      {/* Footer */}
      <div className="text-center mt-10 text-gray-600">
        Made with ❤️ using React & Tailwind CSS.
      </div>

    </div>
  );
};

export default About;