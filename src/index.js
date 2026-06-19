import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import NoteState from './context/notes/NoteState';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NoteState>
      <App />
    </NoteState>
  </React.StrictMode>
);