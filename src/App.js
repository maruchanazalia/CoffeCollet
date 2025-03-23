import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Registro from './pages/Registro';
import MainView from './pages/mainview';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/mainview" element={<MainView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
