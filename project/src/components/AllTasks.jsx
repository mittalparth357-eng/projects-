import React, { useState } from "react";

const AllTasks = ({ tasks, setTasks }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  // Delete Task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Complete Task
  const handleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, status: "Completed" }
        : task
    );

    setTasks(updatedTasks);
  };

  // Failed Task
  const handleFailed = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, status: "Failed" }
        : task
    );

    setTasks(updatedTasks);
  };

  // Start Editing
  const handleEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
  };

  // Save Edited Task
  const handleSave = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, title: editTitle }
        : task
    );

    setTasks(updatedTasks);

    setEditId(null);
    setEditTitle("");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        All Tasks
      </h1>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Tasks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border-2 rounded-xl p-3 mb-5"
      />

      {/* Filters */}

      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        className="border-2 rounded-xl p-3 mb-10"
      >
        <option value="All">All Tasks</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="Failed">Failed</option>
      </select>

      {tasks.length === 0 ? (
        <h1 className="text-center text-2xl font-semibold">
          No Tasks Added Yet.
        </h1>
      ) : (
        tasks
          .filter((task) => {
            const matchesSearch =
              task.title
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesFilter =
              filter === "All"
                ? true
                : task.status === filter;

            return (
              matchesSearch && matchesFilter
            );
          })

          .map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-3xl shadow-lg p-8 mb-8"
            >
              {/* Title */}

              {editId === task.id ? (
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) =>
                    setEditTitle(e.target.value)
                  }
                  className="border-2 rounded-xl p-3 w-full"
                />
              ) : (
                <h1 className="text-3xl font-bold">
                  {task.title}
                </h1>
              )}

              {/* Description */}

              <p className="mt-4 text-lg">
                {task.description}
              </p>

              {/* Task Details */}

              <div className="grid grid-cols-2 gap-5 mt-5">

                <p>
                  <b>Priority :</b>{" "}
                  {task.priority}
                </p>

                <p>
                  <b>Category :</b>{" "}
                  {task.category}
                </p>

                <p>
                  <b>Due Date :</b>{" "}
                  {task.dueDate}
                </p>

                <p>
                  <b>Estimated Time :</b>{" "}
                  {task.estimatedTime} Hours
                </p>

                <p>
                  <b>Status :</b>{" "}
                  {task.status}
                </p>

              </div>

              {/* Buttons */}

              <div className="flex gap-5 mt-8 flex-wrap">

                <button
                  onClick={() =>
                    handleComplete(task.id)
                  }
                  className="bg-green-500 text-white px-5 py-2 rounded-xl"
                >
                  Complete
                </button>

                <button
                  onClick={() =>
                    handleFailed(task.id)
                  }
                  className="bg-yellow-500 text-white px-5 py-2 rounded-xl"
                >
                  Failed
                </button>

                {editId === task.id ? (
                  <button
                    onClick={() =>
                      handleSave(task.id)
                    }
                    className="bg-blue-500 text-white px-5 py-2 rounded-xl"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleEdit(task)
                    }
                    className="bg-blue-500 text-white px-5 py-2 rounded-xl"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() =>
                    handleDelete(task.id)
                  }
                  className="bg-red-500 text-white px-5 py-2 rounded-xl"
                >
                  Delete
                </button>

              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default AllTasks;