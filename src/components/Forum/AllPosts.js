import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

function AllPosts() {
    const initialState = {         // Initial state pour le state initial du composant
        loading: true,
        error: '',
        posts: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH SUCCESS':
                return {
                    loading: false,
                    posts: action.payload,
                    error: ''
                }

            case 'FETCH ERROR':
                return {
                    loading: false,
                    posts: {},
                    error: 'Something went wrong'
                }

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)    // dispatch pour effectuer des actions sur le state  

    useEffect(() => {
        axios.get('http://localhost:5000/forum')
            .then((response) => {
                dispatch({ type: 'FETCH SUCCESS', payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH ERROR' })
            });

    }, []);
  return (
    <React.Fragment>
    <h1 class="text-center mt-3 mb-3">Bienvenu sur le forum</h1>
    {state.loading ? 'Chargement...' : state.posts.map((post, index) => {
        return (
            <div key={index}>
                
                <h3>Titre : {post.titre} </h3>
               <h6>Auteur : {post.auteur}</h6>
               <div>
                            {post.images && post.images.map((image, imgIndex) => (
                                <img key={imgIndex} src={image} alt={`image-${imgIndex}`} />
                            ))}
                        </div>
                <p>Contenu : <br />{post.texte} </p>
                <hr />
            </div>

        )

    })}
</React.Fragment>
  )
}

export default AllPosts