import React from 'react'
import { Link } from 'react-router-dom'
import { GreenButton } from '../Buttons/Button.style'

function Admin() {
    return (
        <div>
           admin
           <GreenButton><Link to="http://localhost:5000/logout">Déconnexion</Link></GreenButton>
        </div>
    )
}

export default Admin