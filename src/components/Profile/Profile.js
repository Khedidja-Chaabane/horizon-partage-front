import React from 'react'
import { useParams } from 'react-router-dom' 

function Profile() {
    const params = useParams();
  return (
    <div>Bonjour {params.username}  , voici votre profil</div>
  )
}

export default Profile