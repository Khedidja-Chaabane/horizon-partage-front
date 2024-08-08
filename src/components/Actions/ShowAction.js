import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ShowAction() {
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
   // Fonction pour formater la date
   const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
};
  return (
    <React.Fragment>
{loading ? ('Chargement...') :(
    <div>
        <h3>Titre : {data.titre} </h3>
                   <h6>Type : {data.type}</h6>
                    <div>
                                
                                    <img src={data.image}
                                        alt={`image-${data.titre}`}
                                        style={{ width: '150px', height: '100px', margin: '5px' }} 
                                    />
                              
                            </div>
                            <h6>Tarif : {data.tarif} €</h6>
                            <h6>Date :{formatDate(data.date)}</h6>
                            <h6>Lieu : {data.lieu}</h6>
                    <p>{data.description} </p>
                    {error ? 'Une erreur est survenue' : null}

     </div> )}
      </React.Fragment>

  )
}

export default ShowAction