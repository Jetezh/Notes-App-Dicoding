import React from "react";
import NoteItem from "./NoteItem";

function NoteList ( { notes, onDelete, onMove, onArchive } ) {
    return (
        <div className="NoteList-list">
            {notes.map((note) => (
                <NoteItem key={note.id} {...note} onDelete={onDelete} onMove={onMove} onArchive={onArchive} />
            ))}
        </div>
    )
}

export default NoteList;