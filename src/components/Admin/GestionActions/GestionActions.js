import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'


function GestionActions() {
    const initialState = {
        loading: true,
        error: "",
        actions: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH SUCCESS':
                return {
                    loading: false,
                    error: "",
                    actions: action.payload
                }
            case 'FETCH ERROR':
                return {
                    loading: false,
                    actions: {},
                    error: "Something went wrong"
                }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('http://localhost:5000/actions')
            .then((response) => {
                dispatch({ type: 'FETCH SUCCESS', payload: response.data })
            }).catch((error) => {
                dispatch({ type: 'FETCH ERROR' })
            })
    }, []);
    // Fonction pour formater la date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };
    return (
        <div>
            <button><Link to="/newAction">Ajouter une nouvelle action</Link></button>
            <React.Fragment>
                <h1 class="text-center mt-3 mb-3">Liste des actions</h1>

                {state.loading ? 'Chargement...' : state.actions.map((action, index) => {
                    return (
                        <div key={index}>

                            <h3>Titre : {action.titre} </h3>
                            <h6>Type : {action.type}</h6>
                            <div>

                                <img src={action.image}
                                    alt={`image-${action.titre}`}
                                    style={{ width: '150px', height: '100px', margin: '5px' }}
                                />

                            </div>
                            <h6>Tarif : {action.tarif} €</h6>
                            <h6>Date :{formatDate(action.date)}</h6>
                            <h6>Lieu : {action.lieu}</h6>
                            <p>{action.description} </p>

                            <button><Link to={`/showAction/${action._id}`}>Afficher l'action'</Link></button>
                            <button><Link to={`/admin/updateAction/${action._id}`}>Modifier l'action'</Link></button>

                            <hr />
                            {state.error ? 'Une erreur est survenue' : null}
                        </div>

                    )

                })}
            </React.Fragment>        </div>
    )
}

export default GestionActions