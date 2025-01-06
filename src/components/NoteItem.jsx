import React from "react";
import DeleteButton from "./DeleteButton";
import MoveButton from "./MoveButton";
import ArchiveButton from "./ArchiveButton";
import { showFormattedDate } from '../utils/data';

function NoteItem ( { id, title, createdAt, body, archived, onDelete, onMove, onArchive } ) {
    return (
        <div className="NoteList-list_item">
            <h1>{title}</h1>
            <h2>{showFormattedDate(createdAt)}</h2>
            <p>{body}</p>
            <div className="NoteList-list_item__button">
                <DeleteButton id={id} onDelete={onDelete} />
                {
                    archived ?
                    <MoveButton id={id} onMove={onMove} /> :
                    <ArchiveButton id={id} onArchive={onArchive} /> 
                }
            </div>
        </div>
    )
}

export default NoteItem;