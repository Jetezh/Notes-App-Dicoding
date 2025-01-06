import React from "react";
import SearchBar from "./SearchBar";
import FeaturedNote from "./FeaturedNote";

function SideBar ( { addNote, searchQuery, onSearch } ) {
    return (
        <div className="SideBar">
            <SearchBar searchQuery={searchQuery} onSearch={onSearch} />
            <FeaturedNote addNote={addNote} />
        </div>
    )
}

export default SideBar;