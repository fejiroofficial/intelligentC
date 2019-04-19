import React, { useState } from 'react';
import { createPost } from './actions/api';
import './App.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const updateInput = event => setTitle(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    const res = await createPost(title);
    if (res.success) {
      return setMessage('Post added successfully');
    }
    return setMessage(res.error);
  };

  return (
    <div className="App" >
      <header className="App-header">
        {message && <p>{message}</p>}
        <input
          name="title"
          onChange={updateInput}
        />
        <button onClick={handleSubmit}>
          submit
        </button>
      </header>
    </div >
  )
};

export default App;
