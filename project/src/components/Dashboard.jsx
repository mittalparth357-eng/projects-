import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = ({ tasks, setTasks }) => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  );

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  );

  const failedTasks = tasks.filter(
    (task) => task.status === "Failed"
  );

  const totalTasks = tasks.length;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.floor(
          (completedTasks.length / totalTasks) * 100
        );

  const recentTasks = [...tasks].slice(-3).reverse();

  const upcomingDeadlines = [...tasks]
    .sort(
      (a, b) =>
        new Date(a.dueDate) - new Date(b.dueDate)
    )
    .slice(0, 3);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-10 py-5 flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold font-serif">
            {currentUser?.name} 👋
          </h1>

          <p className="text-gray-500">
            Good Afternoon
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link
            to="/about"
            className="font-semibold hover:text-blue-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="font-semibold hover:text-blue-600"
          >
            Contact
          </Link>

          <button
            onClick={handleLogout}
            className="font-semibold text-red-600 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Welcome */}
      <section className="text-center py-10">

        <h1 className="text-5xl font-bold">
          Welcome Back, {currentUser?.name}!
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Let's complete today's goals 🚀
        </p>

      </section>

      {/* Task Cards */}
      <section className="flex flex-wrap justify-center gap-8">

        <div className="bg-yellow-200 w-72 h-48 rounded-3xl shadow-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">
            Pending
          </h1>

          <p className="text-5xl font-bold">
            {pendingTasks.length}
          </p>

          <span>
            Tasks Remaining
          </span>
        </div>

        <div className="bg-green-300 w-72 h-48 rounded-3xl shadow-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">
            Completed
          </h1>

          <p className="text-5xl font-bold">
            {completedTasks.length}
          </p>

          <span>
            Successfully Done
          </span>
        </div>

        <div className="bg-red-300 w-72 h-48 rounded-3xl shadow-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">
            Failed
          </h1>

          <p className="text-5xl font-bold">
            {failedTasks.length}
          </p>

          <span>
            Missed Tasks
          </span>
        </div>

        <div className="bg-blue-300 w-72 h-48 rounded-3xl shadow-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">
            Total Tasks
          </h1>

          <p className="text-5xl font-bold">
            {totalTasks}
          </p>

          <span>
            Overall Tasks
          </span>
        </div>

      </section>

      {/* Productivity */}
      <section className="bg-white w-[90%] mx-auto mt-10 p-8 rounded-3xl shadow-lg">

        <div className="flex justify-between mb-4">

          <h1 className="text-3xl font-bold">
            Today's Productivity
          </h1>

          <p>
            {completedTasks.length} / {totalTasks} Tasks
          </p>

        </div>

        <div className="w-full bg-gray-300 h-6 rounded-full">

          <div
            className="bg-green-500 h-6 rounded-full"
            style={{ width: `${productivity}%` }}
          ></div>

        </div>

        <p className="mt-3 font-semibold text-green-600">
          {productivity}% Completed
        </p>

      </section>

      {/* Add Task Button */}
      <div className="flex justify-center mt-10">

        <Link
          to="/addtask"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl text-xl font-semibold shadow-lg"
        >
          + Add New Task
        </Link>

      </div>

      <div className="flex justify-center mt-5">
  <Link
    to="/alltasks"
    className="bg-black text-white px-10 py-4 rounded-2xl text-xl font-semibold shadow-lg"
  >
    View All Tasks
  </Link>
</div>

  
      {/* Upcoming Deadlines */}
      <section className="bg-white w-[90%] mx-auto mt-10 p-8 rounded-3xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6">
          Upcoming Deadlines
        </h1>

        {upcomingDeadlines.length === 0 ? (
          <p>No Tasks Added Yet.</p>
        ) : (
          upcomingDeadlines.map((task) => (
            <div
              key={task.id}
              className="flex justify-between mb-4"
            >
              <p>
                {task.title} - {task.dueDate}
              </p>

              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                {task.priority}
              </span>
            </div>
          ))
        )}

      </section>

      {/* Recent Tasks */}
      <section className="bg-white w-[90%] mx-auto mt-10 p-8 rounded-3xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6">
          Recent Tasks
        </h1>

        {recentTasks.length === 0 ? (
          <p>No Tasks Available.</p>
        ) : (
          recentTasks.map((task) => (
            <p
              key={task.id}
              className="mb-3 text-lg"
            >
              • {task.title}
            </p>
          ))
        )}

      </section>

      {/* Motivation */}
      <section className="bg-orange-200 w-[90%] mx-auto mt-10 p-8 rounded-3xl shadow-lg">

        <h1 className="text-3xl font-bold mb-4">
          Motivation
        </h1>

        <p className="text-2xl italic font-semibold">
          "Consistency is more important than intensity."
        </p>

      </section>

      {/* Footer */}
      <footer className="text-center py-8 mt-10 text-gray-600">
        Made with ❤️ using React & Tailwind by Krishna Manglik
      </footer>

    </div>
  );
};

export default Dashboard;