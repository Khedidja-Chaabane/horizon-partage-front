import React from 'react'

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
</div>
  )
}

export default Connexion