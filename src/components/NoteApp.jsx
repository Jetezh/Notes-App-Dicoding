import React from "react";
import { getInitialData, showFormattedDate } from '../utils/data'
import SideBar from "./SideBar";
import MainContent from "./MainContent";

class NoteApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
            searchQuery: ''
        }

        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onMoveEventHandler = this.onMoveEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onDeleteEventHandler ( id ) {
        this.setState((prevState) => ({
            notes: prevState.notes.filter((note) => note.id !== id)
        }));
    }

    onMoveEventHandler ( id ) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) => note.id === id ? {...note, archived: false} : note)
        }))
    }

    onArchiveEventHandler ( id ) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) => note.id === id ? {...note, archived: true} : note)
        }))
    }

    onSearchEventHandler ( event ) {
        this.setState({ searchQuery: event.target.value })
    }

    onAddNoteEventHandler( { title, body } ) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes, {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: showFormattedDate(new Date()),
                        archived : false
                    }
                ]
            }
        })
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) => 
            note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
            note.body.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        )

        return (
            <div className="note-app">
                <SideBar 
                addNote={this.onAddNoteEventHandler}
                searchQuery={this.state.searchQuery}
                onSearch={this.onSearchEventHandler} />
                <MainContent 
                notes={filteredNotes} 
                onDelete={this.onDeleteEventHandler} 
                onMove={this.onMoveEventHandler} 
                onArchive={this.onArchiveEventHandler} />
            </div>
        )
    }
}

export default NoteApp;