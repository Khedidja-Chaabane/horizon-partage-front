import React from 'react'

function UpdateUser({data}) {

  return (
    <div>
        <form action={`http://localhost:5000/admin/updateUser/${data._id}?_method=PUT`}method="post">
        <div className="mb-3">
          <label htmlFor="admin" className="form-label">Statut : {data.admin ? 'Décochez pour changer le statut de Admin à User ' : 'Cochez pour définir comme Admin '} </label> <br/>
          <br/>
          <input 
            type="checkbox" 
            id="admin" 
            name="admin" 
            defaultChecked={data.admin} 
          />
          
        </div>        
                <button type="submit" className="btn btn-primary">Mettre à jour</button>
            </form>
    </div>
  )
}

export default UpdateUser