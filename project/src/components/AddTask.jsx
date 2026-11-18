import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ tasks, setTasks }) => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    category: "",
    status: "",
    estimatedTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !task.title ||
      !task.description ||
      !task.dueDate ||
      !task.priority ||
      !task.category ||
      !task.status ||
      !task.estimatedTime
    ) {
      alert("Please fill all the fields.");
      return;
    }

    const newTask = {
      id: Date.now(),
      ...task,
    };

    setTasks([...tasks, newTask]);

    alert("Task Added Successfully!");

    setTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      category: "",
      status: "",
      estimatedTime: "",
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-10">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-[700px]">
        <h1 className="text-5xl font-bold text-center mb-8">
          Add New Task
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Task Title"
            className="w-full border-2 rounded-xl p-3"
          />

          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Task Description"
            className="w-full border-2 rounded-xl p-3"
          />

          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="w-full border-2 rounded-xl p-3"
          />

          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="w-full border-2 rounded-xl p-3"
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select
            name="category"
            value={task.category}
            onChange={handleChange}
            className="w-full border-2 rounded-xl p-3"
          >
            <option value="">Select Category</option>
            <option value="Study">Study</option>
            <option value="Coding">Coding</option>
            <option value="College">College</option>
            <option value="Project">Project</option>
            <option value="Personal">Personal</option>
          </select>

          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full border-2 rounded-xl p-3"
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>

          <input
            type="number"
            name="estimatedTime"
            value={task.estimatedTime}
            onChange={handleChange}
            placeholder="Estimated Time (Hours)"
            className="w-full border-2 rounded-xl p-3"
          />

          <div className="flex justify-center gap-5">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700"
            >
              Add Task
            </button>

            <button
              type="button"
              onClick={() =>
                setTask({
                  title: "",
                  description: "",
                  dueDate: "",
                  priority: "",
                  category: "",
                  status: "",
                  estimatedTime: "",
                })
              }
              className="bg-red-500 text-white px-8 py-3 rounded-xl hover:bg-red-600"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;