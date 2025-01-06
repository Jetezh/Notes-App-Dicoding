import React from "react";

function MoveButton ( { id, onMove } ) {
    return <button className="note-item__move btn" onClick={() => onMove(id)} >Move</button>
}

export default MoveButton;