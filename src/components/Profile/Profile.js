import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom' 
import axios from 'axios';
import { GreenButton } from '../Buttons/Button.style';

function Profile() {
    const { id } = useParams();  // Extraire l'ID des paramètres d'URL
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {   
       
        axios.get(`http://localhost:5000/user/${id}`)  // Utiliser l'ID dans la requête
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
        <GreenButton><Link to="http://localhost:5000/logout">Déconnexion</Link></GreenButton>
<h3>{loading ? 'Loading ......' :`Bonjour ${data.username} , Voici votre profil`}</h3>
{error ? error : null }
</div>
  )
}

export default Profile