import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

import NoteContext from '../context/notes/NoteContext';

const Notes = () => {

  const context = useContext(NoteContext);
  const {
  notes,
  getNotes,
  editNote
} = context;

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: ""
  });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {

    ref.current.click();

    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag
    });
  };

 const handleClick = () => {

  editNote(
    note.id,
    note.etitle,
    note.edescription,
    note.etag
  );

  refClose.current.click();
};

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>

      {/* Hidden Button */}

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch Modal
      </button>

      {/* Modal */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">

              <h5
                className="modal-title"
                id="exampleModalLabel"
              >
                Edit Note
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

            </div>

            <div className="modal-body">

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Title
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Description
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Tag
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>

              </form>

            </div>

            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>

              <button
                disabled={
                  note.etitle.length < 5 ||
                  note.edescription.length < 5
                }
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Notes */}

      <h2 className="my-3">
        Your Notes
      </h2>

      <div className="row">

        {notes.length === 0 &&
          "No Notes To Display"}

        {notes.map((note) => {

          return (

            <div
              className="col-md-4"
              key={note._id}
            >

              <div className="card my-3">

                <div className="card-body">

                  <h5 className="card-title">
                    {note.title}
                  </h5>

                  <p className="card-text">
                    {note.description}
                  </p>

<button
  className="btn btn-sm btn-warning mx-2"
  onClick={() => updateNote(note)}
>
  ✏ Edit
</button>

<button
  className="btn btn-sm btn-danger"
>
  🗑 Delete
</button>
                </div>

              </div>

            </div>

          );

        })}

      </div>

    </>
  );
};

export default Notes;