import { useState, useEffect } from "react";

const NoteForm = ({ onSubmit, initialDate = { title: "", description: "" } }) => {
  const [note, setNotes] = useState(initialDate);

  // 🔒 protección: si initialDate cambia o llega undefined, actualizamos con valores vacíos
  useEffect(() => {
    setNotes(initialDate || { title: "", description: "" });
  }, [initialDate]);

  const handleChange = (e) => {
    setNotes({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10"
    >
      <input
        className="block w-full mb-8 input lg:input-lg focus:ring-0 focus:outline-amber-600 border-0"
        placeholder="Título"
        type="text"
        id="title"
        name="title"
        value={note?.title ?? ""}
        onChange={handleChange}
        required
      />

      <textarea
        className="input lg:input-lg resize-y w-full mb-8 textarea focus:ring-0 focus:outline-amber-600 border-0"
        name="description"
        id="description"
        placeholder="Descripción de la tarea"
        value={note?.description ?? ""}
        onChange={handleChange}
        required
      />

      <button className="text-amber-300 btn btn-soft btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default NoteForm;
