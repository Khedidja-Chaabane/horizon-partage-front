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
    <div>
            <h1 class="text-center mt-3 mb-3">{data.titre}</h1>

    </div>
  )
}

export default ShowPost