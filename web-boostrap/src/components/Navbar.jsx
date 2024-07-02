import React from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackClick = () => {
        navigate('/'); // Cambia '/' por la ruta de tu página de inicio de sesión si es diferente
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-success" to="/dashboard">Dashboard</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-tabs me-auto mb-2 mb-lg-0">
                        <NavItem label="Matricula" to="/matricula" active={location.pathname === '/matricula'} />
                        <NavItem label="Horario" to="/horario" active={location.pathname === '/horario'} />
                        <NavItem label="Docente" to="/docente" active={location.pathname === '/docente'} />
                        <NavItem label="Curso" to="/curso" active={location.pathname === '/curso'} />
                        <NavItem label="Estudiante" to="/estudiante" active={location.pathname === '/estudiante'} />
                        <NavItem label="Historial" to="/historial" active={location.pathname === '/historial'} />
                        <NavItem label="Asistencia" to="/asistencia" active={location.pathname === '/asistencia'} />
                        <NavItem label="Reporte" to="/reporte" active={location.pathname === '/reporte'} />
                    </ul>
                    <button
                        className="btn btn-outline-danger ms-auto"
                        type="button"
                        onClick={handleBackClick}
                    >
                        Exit
                    </button>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ label, to, active }) => {
    return (
        <li className="nav-item">
            <Link className={`nav-link ${active ? 'active' : ''}`} to={to}>
                {label}
            </Link>
        </li>
    );
};

export default Navbar