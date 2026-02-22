import React, { useState, useEffect } from "react";
import "./App.css";
import { Plus, Trash2, Pencil, CheckCircle, Circle, Sun, Moon, Calendar, GripVertical } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskInput, setTaskInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [editId, setEditId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    taskId: null,
    taskName: ""
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [tasks, isDarkMode]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) {
      toast.error("Please enter a task");
      return;
    }

    if (editId) {
      setTasks(tasks.map((t) =>
        t.id === editId ? { ...t, tsk: taskInput, date: dueDate } : t
      ));
      setEditId(null);
      toast.success("Task updated!");
    } else {
      const newTask = {
        id: Date.now().toString(),
        tsk: taskInput,
        date: dueDate,
        completed: false
      };
      setTasks([...tasks, newTask]);
      toast.success("Task added!");
    }
    setTaskInput("");
    setDueDate("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const handleEdit = (id) => {
    const item = tasks.find(t => t.id === id);
    setTaskInput(item.tsk);
    setDueDate(item.date || "");
    setEditId(id);
  };

  const handleDelete = (id) => {
    const taskToDelete = tasks.find(t => t.id === id);
    setDeleteModal({ isOpen: true, taskId: id, taskName: taskToDelete.tsk });
  };

  const confirmDelete = () => {
    setTasks(tasks.filter((t) => t.id !== deleteModal.taskId));
    setDeleteModal({ isOpen: false, taskId: null, taskName: "" });
    toast.success("Task deleted");
  };

  return (
    <div className="App">
      <Toaster position="top-right" />

      <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {deleteModal.isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <p>Are you sure you want to delete "{deleteModal.taskName}"?</p>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setDeleteModal({ isOpen: false })}>Cancel</button>
              <button className="btn-confirm-delete" onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}

      <div className="title">
        <h1>My Tasks</h1>
        <p>{tasks.filter(t => !t.completed).length} tasks remaining</p>
      </div>

      <div className="task-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={taskInput}
              placeholder="What needs to be done?"
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <input
              type="date"
              className="date-input"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-submit">
            <Plus size={24} />
          </button>
        </form>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={`task-item ${task.completed ? "done" : ""} ${snapshot.isDragging ? "dragging" : ""}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div className="task-main">
                        <div className="drag-handle" {...provided.dragHandleProps}>
                          <GripVertical size={20} />
                        </div>
                        <button className="btn-check" onClick={() => toggleComplete(task.id)}>
                          {task.completed ? <CheckCircle className="icon-done" /> : <Circle />}
                        </button>
                        <div className="task-text-group">
                          <span className="task-text">{task.tsk}</span>
                          {task.date && <span className="task-date"><Calendar size={12} /> {task.date}</span>}
                        </div>
                      </div>
                      <div className="task-actions">
                        <Pencil className="btn-edit-inline" size={18} onClick={() => handleEdit(task.id)} />
                        <Trash2 className="btn-delete-inline" size={18} onClick={() => handleDelete(task.id)} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}