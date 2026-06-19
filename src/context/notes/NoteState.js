import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

  const host = "https://inotebook-backend-cxsu.onrender.com";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Fetch Notes
  const getNotes = async () => {
    try {

      console.log(
        "Token:",
        localStorage.getItem("token")
      );

      const response = await fetch(
        `${host}/api/notes/fetchallnotes`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
          }
        }
      );

      console.log(
        "Status:",
        response.status
      );

      const json = await response.json();

      console.log(
        "Response:",
        json
      );

      setNotes(json);

    } catch (error) {

      console.error(
        "Fetch Error:",
        error
      );

    }
  };

  // Edit Note
  const editNote = async (
    id,
    title,
    description,
    tag
  ) => {

    await fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({
          title,
          description,
          tag
        })
      }
    );

    let newNotes = JSON.parse(
      JSON.stringify(notes)
    );

    for (
      let i = 0;
      i < newNotes.length;
      i++
    ) {

      if (
        newNotes[i]._id === id
      ) {

        newNotes[i].title = title;

        newNotes[i].description =
          description;

        newNotes[i].tag = tag;

        break;
      }
    }

    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        getNotes,
        editNote
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;