import TableBody from "./TableBody";
import SearchForm from "./SearchForm"



function Table({ users }) {
    return (
        <div>
           <SearchForm />

            <TableBody 
            users = {users}
            />
        </div>
    )
}

export default Table
