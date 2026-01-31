import React from "react";
import "./App.css";
import { Plus, Trash2, Pencil } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setTask({ ...task, [id]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const updatedTasks = tasks.map((task) => (task.id === editId ? { ...task, id: editId } : task));
      setTasks(updatedTasks);
      setEditId(null);
    } else {
      const newTask = { ...task, id: Date.now() };
      setTasks([...tasks, newTask]);
    }
    setTask({});
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    setTask(tasks.find((task) => task.id === id));
    setEditId(id);
  };

  return ( 
    <div className="App">
      <div className="title">
        <h1>Today's Tasks</h1>
        <p>{tasks.length === 0 ? "All tasks completed" : tasks.length === 1 ? "1 task remaining" : `${tasks.length} tasks remaining `}</p>
      </div>
      <div className="task">
        <form method="post" className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="tsk"
            value={task.tsk || ""}
            placeholder="Add a new task..."
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
