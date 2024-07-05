import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'
import Dashboard from './pages/Dashboard'
import Matricula from './pages/Matricula'
import Docente from './pages/Docente'
import FormMatricula from './pages/FormMatricula'
import FormDocente from './pages/FormDocente'
import Curso from './pages/Curso'
import FormCurso from './pages/FormCurso'
import Estudiante from './pages/Estudiante'
import FormEstudiante from './pages/FormEstudiante'
import Historial from './pages/Historial'
import FormHistorial from './pages/FormHistorial'
import Asistencia from './pages/Asistencia'
import AsistenciaTable from './pages/AsistenciaTable'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/matricula" element={<Matricula/>}/>
        <Route path='/matricula/form' element={<FormMatricula/>}/>
        <Route path='/docente' element={<Docente/>}/>
        <Route path='/docente/form' element={<FormDocente/>}/>
        <Route path='/curso' element={<Curso/>}/>
        <Route path='/curso/form' element={<FormCurso/>}/>
        <Route path='/estudiante' element={<Estudiante/>}/>
        <Route path='/estudiante/form' element={<FormEstudiante/>}/>
        <Route path='/historial' element={<Historial/>}/>
        <Route path='/historial/form' element={<FormHistorial/>}/>
        <Route path='/asistencia' element={<Asistencia/>}/>
        <Route path='/asistencia/tabla' element={<AsistenciaTable/>}/>

      </Routes>
    </Router>
  );
}

export default App
