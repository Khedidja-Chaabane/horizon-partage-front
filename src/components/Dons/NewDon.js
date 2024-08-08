import React from 'react'

function NewDon() {
  return (
    <div>
        <h1>New Donation Form</h1>
        <form action="http://localhost:5000/newDon" method="post">
         
          <label>
            Montant:
            <input type="number" name="montant" />
          </label>
          <input type="submit" value="Submit" />
        </form>
  
    </div>
  )
}

export default NewDon