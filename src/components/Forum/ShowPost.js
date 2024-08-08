import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ShowPost() {
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
    <React.Fragment>
    <div>
        {loading ? (
            '.....Chargement'
        ) : error ? (
            <p>{error}</p>
        ) : (
            <div>
                <h1 className="text-center mt-3 mb-3">{data.titre}</h1>
                <div className="mb-3">
                    {data.images && data.images.filter(image => image).map((image, imgIndex) => (
                        <img
                            key={imgIndex}
                            src={image}
                            alt={`image-${imgIndex}`}
                            style={{ maxWidth: '100px', margin: '10px' }}
                        />
                    ))}
                </div>

                <div className="mb-3">
                    <p><strong>Auteur :</strong> {data.auteur}</p>
                </div>

                <div className="container mb-3">
                    <p> {data.texte}</p>
                </div>
            </div>
        )}
    </div>
</React.Fragment>
  )
}

export default ShowPost