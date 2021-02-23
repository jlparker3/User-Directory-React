import React, { useState, useEffect } from "react"
import Heading from "./Heading";
import Table from "./Table";



function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=20&nat=us')
        const userData = await response.json()
        setUsers([...userData.results])
      } catch (err) {
        console.log(err)
      }
     
    }
    fetchData()
  }, [])

  console.log("user", users)
  
  return (
    <div className="App">

     <Heading />
     
     <Table 
     users = {users}
     />
     
    </div>
  );
}

export default App;
