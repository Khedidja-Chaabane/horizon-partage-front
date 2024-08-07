import React from 'react'

function NewPost() {
  
  
  return (
    <div>
        <h1 claas="mt-3 mb-3 text-center">Nouvel article</h1>
        <div class="container mt-5">
    <form action="http://localhost:5000/newPost" method="post">
      <div class="mb-3">
        <label for="titre" class="form-label">Titre</label>
        <input type="text" class="form-control" id="titre" name="titre" required />
      </div>
      <div class="mb-3">
        <label for="auteur" class="form-label">Auteur</label>
        <input type="text" class="form-control" id="auteur" name="auteur" required />
      </div>
      <div class="mb-3">
        <label for="texte" class="form-label">Texte</label>
        <textarea id="texte" name="texte" class="form-control" required></textarea>
      </div>
      <div class="mb-3">
        <label for="images" class="form-label">Images</label>
        <input type="text" class="form-control" id="auteur" name="images"/>
        <input type="text" class="form-control" id="auteur" name="images"/>
        <input type="text" class="form-control" id="auteur" name="images"/>
        <input type="text" class="form-control" id="auteur" name="images"/>


      </div>
      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  </div>
    </div>
  )
}

export default NewPost