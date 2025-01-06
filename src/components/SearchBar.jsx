import React from "react";

function SearchBar ( { searchQuery, onSearch } ) {
    return (
        <div className="SideBar-item__searchbar">
            <h1>Personal Notes</h1>
            <input 
            type="text" 
            placeholder="Find Notes..."
            value={searchQuery}
            onChange={onSearch} />
        </div>
    )
}

export default SearchBar;