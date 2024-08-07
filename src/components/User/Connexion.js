import React from 'react'
import { GreenButton } from '../Buttons/Button.style'
import { Link } from 'react-router-dom'

function Connexion() {
   

  return (
    
    <div class="container mt-3 mb-3">
        <h1 class="text-center mt-3 mb-3">Connexion</h1>
    <form action="http://localhost:5000/api/connexion" method="post">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required/>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" required/>
        </div>
       
        <button type="submit" class="btn btn-primary"><i class="bi bi-box-arrow-in-right"></i> Connexion</button>
    </form>

    <div class="ccontainer">
        <h6>Pas encore inscrit ?</h6>
        <h6>Veuillez vous inscrire</h6>
        <GreenButton><Link to="/Inscription">Inscription</Link></GreenButton>

    </div>
</div>
  )
}

export default Connexion