import React from "react"
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchText, searchText, darkMode }) => {
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="search">
        <MdSearch className="search-icons" size="1.5rem" />
        <input type="text" placeholder="Enter to search..."
          value={searchText}
          onChange={(event) => handleSearchText(event.target.value)} />
      </div>
    </div>
  )
}

export default Search;