import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {
  const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  });

  setTimeout(() => {
    setAlert(null);
  }, 3000);
};
  return (
    <Router>
      <Navbar />
        <Alert alert={alert} />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route
  path="/login"
  element={<Login showAlert={showAlert} />}
/>
  <Route
  path="/signup"
  element={<Signup showAlert={showAlert} />}
/>
</Routes>
    </Router>
  );
}

export default App;