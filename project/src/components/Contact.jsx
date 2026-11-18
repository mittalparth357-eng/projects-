import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Contact Me
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Feel free to connect with me.
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-white shadow-lg rounded-3xl p-10 mt-10 w-[80%] mx-auto">

        <div className="space-y-6 text-xl">

          <div>
            <h2 className="font-bold">👨‍💻 Name</h2>
            <p>Krishna Manglik</p>
          </div>

          <div>
            <h2 className="font-bold">📧 Email</h2>
            <p>krishna@example.com</p>
          </div>

          <div>
            <h2 className="font-bold">🐱 GitHub</h2>
            <p>github.com/krishnamanglik4</p>
          </div>

          <div>
            <h2 className="font-bold">💼 LinkedIn</h2>
            <p>linkedin.com/in/your-linkedin-profile</p>
          </div>

          <div>
            <h2 className="font-bold">🏫 College</h2>
            <p>ABES Engineering College</p>
          </div>

          <div>
            <h2 className="font-bold">🎯 Interests</h2>
            <p>
              Web Development | DSA | Artificial Intelligence &
              Machine Learning
            </p>
          </div>

        </div>
      </div>

      {/* Message Section */}
      <div className="bg-white shadow-lg rounded-3xl p-8 mt-10 w-[80%] mx-auto">

        <h2 className="text-3xl font-bold mb-4">
          Let's Build Something Awesome!
        </h2>

        <p className="text-lg text-gray-700 leading-8">
          I'm always excited to learn new technologies and work on
          interesting projects. Feel free to reach out if you'd like
          to connect or collaborate.
        </p>

      </div>

      {/* Footer */}
      <div className="text-center mt-10 text-gray-600">
        Made with ❤️ by Krishna Manglik
      </div>

    </div>
  );
};

export default Contact;