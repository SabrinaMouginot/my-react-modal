import './src/Modal.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './src/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Hello, My React Modal</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>This is the modal content!</h2>
      </Modal>
    </div>
  );
};

// Render the App component into the #app div
ReactDOM.render(<App />, document.getElementById('app'));
