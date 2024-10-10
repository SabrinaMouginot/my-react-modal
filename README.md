# Using react-modal-sabrinamouginot in a Project

## WITH create-react-app (CRA)

1/1 Create a New Project with CRA
If you haven't installed create-react-app yet, start by installing it globally:

```bash
npm install -g create-react-app
```

Next, create your new project:

```bash
npx create-react-app my-new-project
cd my-new-project
```

1/2 Install the Library
In your project, install the library using the following command:

```bash
npm install react-modal-sabrinamouginot
```

1/3 Use the Modal in Your Project
Then, use the modal in a component. For example, in src/App.js:

```jsx
import React, { useState } from 'react';
import { Modal } from 'react-modal-sabrinamouginot';
import 'react-modal-sabrinamouginot/dist/style.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Using My Modal Library</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>This is a modal!</h2>
      </Modal>
    </div>
  );
}

export default App;
```

1/4 Run Your Project
Finally, run the following command to launch your project:

```bash
npm start
```

## WITH Vite

2/1 Create a New Project with Vite
First, install Vite and create your testmodal-vite project:

```bash
npm create vite@latest testmodal-vite -- --template react
cd testmodal-vite
```

Then, install the dependencies:

```bash
npm install
```

2/2 Install the Library
In your Vite project, install the library with the following command:

```bash
npm install react-modal-sabrinamouginot
```

2/3 Use the Modal in Your Project
Next, in src/App.jsx, you can use the modal just like in CRA:

```jsx
import React, { useState } from 'react';
import { Modal } from 'react-modal-sabrinamouginot';
import 'react-modal-sabrinamouginot/dist/style.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Using My Modal Library with Vite</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>This is a modal!</h2>
      </Modal>
    </div>
  );
}

export default App;
```

2/4 Run Your Project
Finally, start your Vite project with the following command:

```bash
npm run dev
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
