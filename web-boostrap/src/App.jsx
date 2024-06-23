import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css'; // Asegúrate de importar el archivo CSS
import Dashboard from './pages/Dashboard';
import Matricula from './pages/Matricula';

import Docente from './pages/Docente';
import MatriculaMatricula from './pages/MatriculaMatricula';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/matricula" element={<Matricula/>}/>
        <Route path="/matricula/matricula" element={<MatriculaMatricula/>}/>
        <Route path='/docente' element={<Docente/>}/>
      </Routes>
    </Router>
  );
}

export default App;
