# react-modal-sabrinamouginot

`react-modal-sabrinamouginot` is a lightweight and simple library to display modals in your React applications. This component allows you to easily control the visibility of the modal with the `isOpen` and `onClose` props.

## Installation

You can install the library using npm or yarn:

```bash
npm install react-modal-sabrinamouginot
```
or

```bash
Copier le code
yarn add react-modal-sabrinamouginot
```
## Usage
Here's a basic example showing how to use the Modal component:

```bash
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
```
## Props
The Modal component accepts the following props:

Prop	Type	Description
isOpen	Boolean	Controls whether the modal is open (true) or closed (false).
onClose	Function	Callback function triggered when the modal is closed by the user.
Detailed Example

```bash
jsx
Copier le code
<Modal isOpen={isOpen} onClose={handleClose}>
  <h1>Welcome to the Modal</h1>
  <p>This is a simple modal example.</p>
  <button onClick={handleClose}>Close</button>
</Modal>
```

License
MIT

Adding PropTypes to Modal Component
Here’s the code for your Modal component with PropTypes:

```bash
Modal.jsx
jsx
Copier le code
import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

// Define PropTypes for the Modal component
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // Boolean for modal open/close state
  onClose: PropTypes.func.isRequired, // Function to handle modal close action
  children: PropTypes.node,           // React node for modal content
};

export default Modal;
```

## PropTypes Explanation:
isOpen is a required boolean (isRequired) that controls whether the modal is displayed or not.
onClose is a required function that will be called when the modal is closed.
children allows for React nodes, which means any content inside the modal.
