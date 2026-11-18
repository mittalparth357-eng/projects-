import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-5">
      <div className="bg-white shadow-2xl rounded-3xl p-10 text-center max-w-xl">

        <h1 className="text-9xl font-bold text-red-500">
          404
        </h1>

        <h2 className="text-4xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          Go Back To Dashboard
        </Link>

      </div>
    </div>
  );
};

export default NotFound;