import React, { useState } from 'react';

const AddNote = () => {

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: ""
  });

  const [notes, setNotes] = useState([]);

  const handleClick = (e) => {

  e.preventDefault();

  if (note.title.length < 5) {

    alert(
      "Title must be at least 5 characters long"
    );

    return;
  }

  if (note.description.length < 5) {

    alert(
      "Description must be at least 5 characters long"
    );

    return;
  }

  setNotes([
    ...notes,
    {
      id: Date.now(),
      title: note.title,
      description: note.description,
      tag: note.tag
    }
  ]);

  alert("Note Added Successfully");

  setNote({
    title: "",
    description: "",
    tag: ""
  });

};

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(
      (note) => note.id !== id
    );

    setNotes(updatedNotes);

    alert("Note Deleted Successfully");
  };

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container my-4">

      <div className="card shadow mb-4">

        <div className="card-body">

          <h3 className="mb-3">
            <i className="fas fa-plus-circle me-2"></i>
            Add New Note
          </h3>

          <form>

            <div className="mb-3">
              <input
  type="text"
  className="form-control"
  placeholder="Enter Note Title"
  name="title"
  value={note.title}
  onChange={onChange}
  minLength={5}
  required
/>
            </div>

            <div className="mb-3">
             <textarea
  className="form-control"
  rows="4"
  placeholder="Write your note..."
  name="description"
  value={note.description}
  onChange={onChange}
  minLength={5}
  required
></textarea>
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Tag (Study, Work, Personal)"
                name="tag"
                value={note.tag}
                onChange={onChange}
              />
            </div>

         <button
  className="btn btn-primary"
  onClick={handleClick}
  disabled={
    note.title.length < 5 ||
    note.description.length < 5
  }
>
  Add Note
</button>

          </form>

        </div>

      </div>

      <h3 className="mb-3">
        <i className="fas fa-sticky-note me-2"></i>
        Your Notes
      </h3>

      <div className="row">

        {notes.length === 0 && (
          <div className="alert alert-info">
            No notes available. Add your first note.
          </div>
        )}

        {notes.map((note) => (

          <div
            className="col-md-4 mb-3"
            key={note.id}
          >

            <div className="card border-primary shadow-sm h-100">

              <div className="card-body">

                <h5 className="card-title">
                  {note.title}
                </h5>

                <p className="card-text">
                  {note.description}
                </p>

                <span className="badge bg-primary me-2">
                  {note.tag || "General"}
                </span>

                <button
                  className="btn btn-sm btn-danger float-end"
                  onClick={() => deleteNote(note.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AddNote;