import React from "react";
import NoteList from "./NoteList";

function ArchivedNotes ( { notes, onDelete, onMove} ) {
    const archivedNotes = notes.filter(note => note.archived === true);

    return (
        <div className="ArchivedNotes">
            <h1>Archived Notes</h1>
            {archivedNotes.length > 0 ? (
                <NoteList notes={archivedNotes} onDelete={onDelete} onMove={onMove} />
            ) : (
                <div className="ArchivedNotes__message">
                    <h1>Notes Not Found</h1>
                </div>
            )}
        </div>
    )
}

export default ArchivedNotes;