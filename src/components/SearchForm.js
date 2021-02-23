import React from 'react'


function SearchForm({ handleSearchChange }) {


    return (
        <div className= "searchform">
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
