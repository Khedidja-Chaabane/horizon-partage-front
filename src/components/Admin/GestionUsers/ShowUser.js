import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UpdateUser from './UpdateUser';

function ShowUser() {
  const { id } = useParams();  // Extraire l'ID des paramètres d'URL

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState({});
    useEffect(() => {
      axios.get(`http://localhost:5000/user/${id}`)
          .then(response => {
              setLoading(false);
              setData(response.data);
              setError('');
          })
          .catch((error) => {
              setLoading(false);
              setError('Error');
              setData({});
          })
  }, [id])
  return (
    <div>
    {loading ? '.... Loading' : <h3>Pseudo: {data.username}</h3>}
    {loading ? '.... Loading' : <h3>Email: {data.email}</h3>}
    {loading ? '.... Loading' : <h3>Statut : {data.admin ? 'Admin' : 'User'}</h3>}
    {(error) ? '... Error' : null}
{/* Pour modifier le user : importer le composant updatecontact et lui passer l'objet en props */}
    <UpdateUser data={data}/> 

   

</div>  )
}

export default ShowUser