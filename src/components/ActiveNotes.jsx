import React from "react";
import NoteList from "./NoteList";

function ActiveNotes ( { notes, onDelete, onArchive } ) {
    const archivedNotes = notes.filter(note => note.archived === false);

    return (
        <div className="ActiveNotes">
            <h1>Active Notes</h1>
            {archivedNotes.length > 0 ? (
                <NoteList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
            ) : (
                <div className="ActiveNotes__message hidden">
                    <h1>Notes Not Found</h1>
                </div>
            )}
        </div>
    )
}

export default ActiveNotes;