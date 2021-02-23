

function Heading() {
    const style = {
        color: "white",
        backgroundColor: "grey",
        width: "100%",
        textalign: "center",
        padding: "10px",
        fontFamily: "Arial"
      }
    
    return (

        <div style ={style}>

           <h1>Employee Directory</h1> 
            <p>Select and sort through the employee's information.</p>
        </div>
    )
}

export default Heading
