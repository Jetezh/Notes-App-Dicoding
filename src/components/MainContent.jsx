import React from "react";
import ActiveNotes from "./ActiveNotes";
import ArchivedNotes from "./ArchivedNotes";

function MainContent ( { notes, onDelete, onMove, onArchive } ) {
    return (
        <div className="MainContent" >
            <ActiveNotes notes={notes} onDelete={onDelete} onArchive={onArchive} />
            <ArchivedNotes notes={notes} onDelete={onDelete} onMove={onMove} />
        </div>
    )
}

export default MainContent;