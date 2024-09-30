import React from 'react';
import './Modal.css';

// Déclaration du composant Modal, qui prend en paramètre trois props : isOpen, onClose, et children
const Modal = ({ isOpen, onClose, children }) => {
  // Si le modal n'est pas ouvert (isOpen est false), ne pas afficher le composant (retourne null)
  if (!isOpen) return null;

  // Rendu du modal si isOpen est true
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Bouton pour fermer le modal, appelle la fonction onClose passée en props */}
        <button onClick={onClose} className="modal-close">
          X
        </button>
        {/* Affichage du contenu passé entre les balises <Modal></Modal>, via la prop children */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
