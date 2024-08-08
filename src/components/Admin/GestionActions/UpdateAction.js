import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function UpdateAction() {
  const { id } = useParams();  // Extraire l'ID des paramètres d'URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/action/${id}`)  // Utiliser l'ID dans la requête
      .then(response => {
        setLoading(false);
        console.log(response.data);
        setData(response.data);
        setError('');
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
        setData({});
        setError('Une erreur est survenue');
      })
  }, [id]);

  return (
    <div>
      <h1 className="mt-3 mb-3 text-center">Modifier l'action</h1>
      <div className="container mt-5">
        {loading ? (
          'Chargement...'
        ) : (
          <form action={`http://localhost:5000/admin/updateAction/${id}?_method=PUT`} method="post">
            <div className="mb-3">
              <label htmlFor="titre" className="form-label">Titre</label>
              <input type="text" className="form-control" id="titre" name="titre" defaultValue={data.titre} />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">Type de l'action</label>
              <select name="type" id="type" className="form-select" defaultValue={data.type}>
                <option value="Service">Service</option>
                <option value="Cours">Cours</option>
                <option value="Atelier">Atelier</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="tarif" className="form-label">Tarif</label>
              <input type="number" className="form-control" id="tarif" name="tarif" defaultValue={data.tarif} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea id="description" name="description" className="form-control" defaultValue={data.description}></textarea>
            </div>
            <div>
              <h6 className="text-center">Image actuelle :</h6>
              <img src={data.image}
                alt={`image-${data.titre}`}
                style={{ width: '150px', height: '100px', margin: '5px' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input type="text" className="form-control" id="image" name="image" defaultValue={data.image} />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" className="form-control" id="date" name="date" defaultValue={data.date} />
            </div>
            <div className="mb-3">
              <label htmlFor="lieu" className="form-label">Lieu</label>
              <input type="text" className="form-control" id="lieu" name="lieu" defaultValue={data.lieu} />
            </div>
            <button type="submit" className="btn btn-primary">Enregistrer</button>
          </form>
        )}
        <div>
          {/* Formulaire pour supprimer le post */}
          {/* {loading ? (
            'Chargement...'
          ) : (
            <div>
              <form action={`http://localhost:5000/deletePost/${id}?_method=DELETE`} method="post">
                <button type="submit" className="btn btn-danger mt-3">Supprimer</button>
              </form>
            </div>
          )} */}
        </div>
        {error ? 'Une erreur est survenue' : null}
      </div>
    </div>
  );
}

export default UpdateAction;
