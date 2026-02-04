import React from "react";
import "./App.css";
import { Plus, Trash2, Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState({});
  const [editId, setEditId] = useState(null);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    taskId: null,
    taskName: ""
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setTask({ ...task, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.tsk || task.tsk.trim() === "") {
      toast.error("Please enter a task");
      return;
    }

    if (editId) {
      const updatedTasks = tasks.map((t) =>
        t.id === editId ? { ...task, id: editId } : t
      );
      setTasks(updatedTasks);
      setEditId(null);
      toast.success("Task updated successfully!");
    } else {
      const newTask = { ...task, id: Date.now() };
      setTasks([...tasks, newTask]);
      toast.success("Task added successfully!");
    }
    setTask({});
  };

  const handleDelete = (id) => {
    const taskToDelete = tasks.find(task => task.id === id);
    setDeleteModal({
      isOpen: true,
      taskId: id,
      taskName: taskToDelete.tsk
    });
  };

  const confirmDelete = () => {
    setTasks(tasks.filter((task) => task.id !== deleteModal.taskId));
    toast.success(`Task deleted successfully!`);
    setDeleteModal({ isOpen: false, taskId: null, taskName: "" });
  };

  const cancelDelete = () => {
    setDeleteModal({ isOpen: false, taskId: null, taskName: "" });
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setTask({ tsk: taskToEdit.tsk });
    setEditId(id);
    toast("Edit mode activated", {
      icon: <Pencil size={16} />,
      style: {
        background: "#e8f4ff",
        color: "#0066cc"
      }
    });
  };

  return (
    <div className="App">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#2e251f',
            border: '1px solid #e8dfd6',
            fontFamily: '"Poppins", sans-serif',
          },
          success: {
            style: {
              background: '#f0f9f0',
              color: '#2d6a4f',
              border: '1px solid #b7e4c7',
            },
            iconTheme: {
              primary: '#2d6a4f',
              secondary: '#fff',
            },
          },
          error: {
            style: {
              background: '#fef2f2',
              color: '#b91c1c',
              border: '1px solid #fecaca',
            },
            iconTheme: {
              primary: '#b91c1c',
              secondary: '#fff',
            },
          },
        }}
      />

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Confirm Delete</h3>
            </div>
            <div className="modal-content">
              <p>Are you sure you want to delete this task?</p>
              <p className="task-name">"{deleteModal.taskName}"</p>
              <p className="warning-text">This action cannot be undone.</p>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="btn-confirm-delete" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="title">
        <h1>Today's Tasks</h1>
        <p>{tasks.length === 0 ? "All tasks completed" : tasks.length === 1 ? "1 task remaining" : `${tasks.length} tasks remaining`}</p>
      </div>

      <div className="task">
        <form method="post" className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="tsk"
            value={task.tsk || ""}
            placeholder={editId ? "Edit task..." : "Add a new task..."}
            required
            onChange={handleChange}
          />
          <button type="submit" className="btn-submit">
            <Plus size={24} />
          </button>
        </form>
      </div>

      <div className="task-list">
        {tasks.map((task) => {
          return (
            <ul key={task.id} className="task-item">
              <li>
                {task.tsk}
                {editId === task.id && (
                  <span className="editing-badge">Editing...</span>
                )}
                <Pencil
                  className="btn-edit"
                  size={20}
                  onClick={() => handleEdit(task.id)}
                />
                <Trash2
                  className="btn-delete"
                  size={20}
                  onClick={() => handleDelete(task.id)}
                />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}