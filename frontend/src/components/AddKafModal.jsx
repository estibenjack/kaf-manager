import { useState } from "react";
import classes from "./css/AddKafModal.module.css";

export default function AddKafModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    id: "",
    articleTitle: "",
    requests: "",
    status: "in-progress",
    dateAssigned: new Date().toISOString().split("T")[0],
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault;
    onAdd(formData);
    onClose();
  }

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <h2>Add New KAF</h2>
        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            type="text"
            name="id"
            placeholder="KAF Number"
            value={FormData.id}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="articleTitle"
            placeholder="Article Title"
            value={formData.articleTitle}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="url"
            placeholder="Article URL"
            value={formData.url}
            onChange={handleChange}
            required
          />
          <textarea
            name="requests"
            placeholder="Requests"
            value={formData.requests}
            onChange={handleChange}
            className={classes.requests}
            required
          />
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="in-progress">In Progress</option>
            <option value="waiting">Waiting</option>
            <option value="completed">Completed</option>
          </select>
          <input
            type="date"
            name="dateAssigned"
            value={formData.dateAssigned}
            onChange={handleChange}
          />
          <div className={classes.buttons}>
            <button type="submit">Add KAF</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
