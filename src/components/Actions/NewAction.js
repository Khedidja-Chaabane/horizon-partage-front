import React from 'react'

function NewAction() {
    return (
        <div>
            <h1 claas="mt-3 mb-3 text-center">Nouvelle action</h1>
            <div class="container mt-5">
                <form action="http://localhost:5000/newAction" method="post">
                <div class="mb-3">
                        <label for="titre" class="form-label">Titre</label>
                        <input type="text" class="form-control" id="titre" name="titre" required />
                    </div>
                    <div class="mb-3">
                        <label for="type" class="form-label">Type de l'action</label>
                        <select name="type" id="type" className="form-select" required>
                            <option value="">--Choisissez le type de l'action--</option>
                            <option value="Service">Service</option>
                            <option value="Cours">Cours</option>
                            <option value="Atelier">Atelier</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="tarif" class="form-label">Tarif</label>
                        <input type="number" class="form-control" id="tarif" name="tarif" required />
                    </div>
                    
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea id="description" name="description" class="form-control" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">Image</label>
                        <input type="text" class="form-control" id="image" name="image" required/>
                    </div>
                    <div class="mb-3">
                        <label for="date" class="form-label">Date</label>
                        <input type="date" class="form-control" id="date" name="date" required/>
                    </div>
                    <div class="mb-3">
                        <label for="lieu" class="form-label">Lieu</label>
                        <input type="lieu" class="form-control" id="lieu" name="lieu" required/>
                    </div>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                </form>
            </div>
        </div>
    )
}

export default NewAction