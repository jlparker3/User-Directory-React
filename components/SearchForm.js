import React from 'react'


function SearchForm({ handleSearchChange }) {

    const style = {
        padding: "10px",
        fontFamily: "Arial"
      }

    return (
        <div style={style}>
          <form>
              <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearchChange}
              />
              </form>  
        </div>
    )
}

export default SearchForm
