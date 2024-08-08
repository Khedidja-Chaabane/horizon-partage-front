import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'

function GestionUsers() {
    const initialState = {
        loading: true,
        error : '',
        users: {}
    }
    const reducer = (state , action)=>{
        switch(action.type){
            case 'FETCH SUCCESS':
                return{
                    loading: false,
                    error: '',
                    users: action.payload
                }

                case 'FETCH ERROR':
                    return{
                        loading: false,
                        error: 'Something went wrong',
                        users: {}
                    }
                    default:
                        return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get('http://localhost:5000/admin/gestionUsers')
        .then((response)=>{
            dispatch({type: 'FETCH SUCCESS', payload: response.data})
        }).catch((error)=>{
            dispatch({type: 'FETCH ERROR'})
        });
    },[])
  return (
    <React.Fragment>
            <h1 class="text-center mt-3 mb-3">Liste des Utilisateurs</h1>
            {state.loading ? 'Chargement...' : state.users.map((user, index) => {
        return (
            <div key={index}>
                
                <h3>Identifiant : {user._id} </h3>
               <h2>Pseudo : {user.username}</h2>
                <p>Email : {user.email} </p>
                <p>Statut : {user.admin ? 'admin' : 'user'}</p>

           <button><Link to={`/admin/showUser/${user._id}`}>Afficher l'utilisateur</Link></button>
           {state.error ? "Error" : null}
                <hr />
            </div>

        )

    })}
    </React.Fragment>
  )
}

export default GestionUsers