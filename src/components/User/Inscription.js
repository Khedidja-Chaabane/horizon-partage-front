import React from 'react'

function Inscription() {
  return (
    <div>
         <div>
        <h1 claas="mt-3 mb-3 text-center">Inscription</h1>
        <div class="container mt-5">
    <form action="http://localhost:5000/api/newUser" method="post">
      <div class="mb-3">
        <label for="username" class="form-label">Pseudo</label>
        <input type="text" class="form-control" id="username" name="username" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Adresse mail</label>
        <input type="email" class="form-control" id="email" name="email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input type="password" class="form-control" id="password" name="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  </div>
    </div>
    </div>
  )
}

export default Inscription