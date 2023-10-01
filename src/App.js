import React from 'react';
import ProfilePhoto from './Components/ProfilePhoto'; // Importation du composant ProfilePhoto depuis le fichier './Components/ProfilePhoto'
import FullName from './Components/FullName';   // Importation du composant FullName depuis le fichier './Components/FullName'
import Address from './Components/Address';     // Importation du composant Address depuis le fichier './Components/Address'
import './App.css';
function App() {
  return (
    <div>
      <h1>Mon Application React</h1>  {/* Titre de l'application */}
      <ProfilePhoto />                {/* Utilisation du composant ProfilePhoto */}
      <FullName />                    {/* Utilisation du composant FullName */}
      <Address />                     {/* Utilisation du composant Address */}
    </div>
  );
}

export default App;
