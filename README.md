# react-modal-sabrinamouginot

`react-modal-sabrinamouginot` is a lightweight and simple library to display modals in your React applications. This component allows you to easily control the visibility of the modal with the `isOpen` and `onClose` props.

## Installation

You can install the library using npm or yarn:

```bash
npm install react-modal-sabrinamouginot

or

yarn add react-modal-sabrinamouginot

Usage
Here's a basic example showing how to use the Modal component:

import React, { useState } from 'react';
import Modal from 'react-modal-sabrinamouginot';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>This is a modal!</h2>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
