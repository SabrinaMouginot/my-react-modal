import './src/Modal.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './src/Modal';

// Définition du composant principal App
const App = () => {
  // Déclaration d'un état local 'isOpen' avec un setter 'setIsOpen' pour contrôler l'affichage du modal
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir le modal, change l'état 'isOpen' à true
  const openModal = () => {
    setIsOpen(true);
  };

  // Fonction pour fermer le modal, change l'état 'isOpen' à false
  const closeModal = () => {
    setIsOpen(false);
  };

  // Contenu du composant App
  return (
    <div>
      <h1>Hello, My React Modal</h1>
      {/* Bouton pour ouvrir le modal, appelle la fonction openModal */}
      <button onClick={openModal}>Open Modal</button>
      {/* Affichage du modal, avec des props isOpen et onClose, et du contenu en children */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>This is the modal content!</h2>
      </Modal>
    </div>
  );
};

// Utilisation de ReactDOM.render pour afficher le composant App dans un élément avec l'id 'app'
ReactDOM.render(<App />, document.getElementById('app'));
