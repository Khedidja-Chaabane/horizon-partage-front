import React from 'react'
import { Link } from 'react-router-dom'
import Actions from '../../Actions/Actions'

function GestionActions() {
  return (
    <div>    <button><Link to="/newAction">Ajouter une nouvelle action</Link></button>
    <Actions/>
</div>
  )
}

export default GestionActions