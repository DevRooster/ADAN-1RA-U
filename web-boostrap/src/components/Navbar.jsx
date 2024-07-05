import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/dashboard">Micro System</Link>
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
                        <NavItem label="Matricula" to="/matricula" active={location.pathname === '/matricula'} disabled />
                        <NavItem label="Horario" to="/horario" active={location.pathname === '/horario'} disabled />
                        <NavItem label="Docente" to="/docente" active={location.pathname === '/docente'} />
                        <NavItem label="Curso" to="/curso" active={location.pathname === '/curso'} />
                        <NavItem label="Estudiante" to="/estudiante" active={location.pathname === '/estudiante'} />
                        <NavItem label="Historial" to="/historial" active={location.pathname === '/historial'} />
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ cursor: 'pointer' }}
                            >
                                Asistencia
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/asistencia">Agregar Asistencias</Link></li>
                                <li><Link className="dropdown-item" to="/asistencia/tabla">Registros de Asistencias</Link></li>
                            </ul>
                        </li>
                        <NavItem label="Reporte" to="/reporte" active={location.pathname === '/reporte'} disabled/>
                    </ul>
                    <button className="btn btn-outline-danger ms-auto" type="button" onClick={handleBackClick}>
                        Exit
                    </button>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ label, to, active, disabled }) => {
    return (
        <li className={`nav-item ${disabled ? 'disabled' : ''}`}>
            <Link className={`nav-link ${active ? 'active' : ''}`} to={to} onClick={(e) => disabled && e.preventDefault()}>
                {label}
            </Link>
        </li>
    );
};

export default Navbar;