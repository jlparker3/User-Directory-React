import React from 'react'

function SearchForm() {

    const [search, setSearch] = useState('')

    handleSearchChange = (event) => {
        event.preventDefault()
        const value = event.target.value
        const name = event.target.name

        //update the state
        
    }
    return (
        <div className= "searchform">
          <form>
              <input
              type="search"
              placeholder="Search"
              onChange={handleSearchChange}
              />
              </form>  
        </div>
    )
}

export default SearchForm
