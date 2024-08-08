import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { GreenButton } from '../Buttons/Button.style'

function Admin() {
    return (
        <div>
            <h1>Bonjour Admin</h1> 
           <nav><GreenButton><Link to="http://localhost:5000/logout">Déconnexion</Link></GreenButton>

<GreenButton><Link to="/admin/gestionUsers">Gestion des utilisateurs</Link></GreenButton>
<GreenButton><Link to="/admin/gestionActions">Gestion des Actions</Link></GreenButton>

<Outlet/></nav>
                        
           
        </div>
    )
}

export default Admin