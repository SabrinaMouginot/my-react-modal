# react-modal-sabrinamouginot

`react-modal-sabrinamouginot` is a lightweight and simple library to display modals in your React applications. This component allows you to easily control the visibility of the modal with the `isOpen` and `onClose` props.

## Installation

You can install the library using npm or yarn:

```bash
npm install react-modal-sabrinamouginot
```

or

```bash
yarn add react-modal-sabrinamouginot
```

## Usage

Here's a basic example showing how to use the Modal component:

```jsx
import React, { useState } from 'react';
import { Modal } from 'react-modal-sabrinamouginot';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} >
        <h2> This is a modal! </h2>
        <button onClick={handleCloseModal} >Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
```

## Props

The Modal component accepts the following props:

Prop Type Description
isOpen Boolean Controls whether the modal is open (true) or closed (false).
onClose Function Callback function triggered when the modal is closed by the user.
Detailed Example

```jsx
<Modal isOpen={isOpen} onClose={handleClose} >
  <h1>Welcome to the Modal</h1>
  <p>This is a simple modal example.</p>
  <button onClick={handleClose} >Close</button>
</Modal>
```

License
MIT
