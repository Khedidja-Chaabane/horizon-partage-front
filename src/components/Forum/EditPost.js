import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditPost() {
    const { id } = useParams();  // Extraire l'ID des paramètres d'URL
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {   
       
        axios.get(`http://localhost:5000/post/${id}`)  // Utiliser l'ID dans la requête
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
    }, [id]) // Ajouter `id` comme dépendance pour que l'effet se déclenche lorsqu'il change
  return (
    <div>
       
       <div>
            <h1 className="mt-3 mb-3 text-center">Modifier le post</h1>
            <div className="container mt-5">
                <form action={`http://localhost:5000/updatePost/${id}?_method=PUT`} method="post">
                    <div className="mb-3">
                        <label htmlFor="titre" className="form-label">Titre</label>
                        <input type="text" className="form-control" id="titre" name="titre" defaultValue={data.titre} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur" className="form-label">Auteur</label>
                        <input type="text" className="form-control" id="auteur" name="auteur" defaultValue={data.auteur} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="texte" className="form-label">Texte</label>
                        <textarea id="texte" name="texte" className="form-control" defaultValue={data.texte} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Images Actuelles</label>
                        <div>
                            {data.images && data.images.filter(image => image).map((image, imgIndex) => (
                                <img key={imgIndex} src={image} alt={`image-${imgIndex}`} style={{ maxWidth: '100px', margin: '10px' }} />
                            ))}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="images" className="form-label">Changer les Images (laisser vide pour conserver les images actuelles)</label>
                        {data.images && data.images.map((image, index) => (
                            <input key={index} type="text" className="form-control" name="images" defaultValue={image} placeholder={`Image URL ${index + 1}`} />
                        ))}
                        {[...Array(4 - (data.images ? data.images.length : 0))].map((_, index) => (
                            <input key={index + (data.images ? data.images.length : 0)} type="text" className="form-control" name="images" placeholder={`Image URL ${index + (data.images ? data.images.length : 0) + 1}`} />
                        ))}
                    </div>
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditPost