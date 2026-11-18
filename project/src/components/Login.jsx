import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Users Database (Dummy Data)
  const users = [
    {
      id: 1,
      name: "Krishna Manglik",
      email: "krishna@gmail.com",
      password: "krishna123",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      password: "rahul123",
    },
    {
      id: 3,
      name: "Priya Singh",
      email: "priya@gmail.com",
      password: "priya123",
    },
    {
      id: 4,
      name: "Aman Verma",
      email: "aman@gmail.com",
      password: "aman123",
    },
    {
      id: 5,
      name: "Ananya Gupta",
      email: "ananya@gmail.com",
      password: "ananya123",
    },
  ];

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login Function
  const handleLogin = (e) => {
    e.preventDefault();

    // Empty Fields Validation
    if (!email || !password) {
      alert("Please fill all the fields.");
      return;
    }

    // Check User Credentials
    const validUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    // Login Successful
    if (validUser) {
      alert(`Welcome ${validUser.name}!`);

      // Save Login Status
      localStorage.setItem("isLoggedIn", "true");

      // Save Current User Details
      localStorage.setItem(
        "currentUser",
        JSON.stringify(validUser)
      );

      navigate("/dashboard");
    }

    // Invalid Credentials
    else {
      alert("Invalid Email or Password.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-5">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-[500px]">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Welcome Back!
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Task Management Dashboard
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >

          {/* Email */}
          <div>
            <label className="font-semibold text-lg">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border-2 rounded-xl p-3 mt-2 outline-none focus:border-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold text-lg">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border-2 rounded-xl p-3 mt-2 outline-none focus:border-indigo-500"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>

            <p className="text-blue-600 cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl text-xl font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
          >
            Login
          </button>

        </form>

        {/* Quote */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 italic">
            "Small progress every day leads to big results."
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;