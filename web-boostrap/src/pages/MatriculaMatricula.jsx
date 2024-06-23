// src/pages/MatriculaMatricula.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const MatriculaMatricula = () => {
    // Datos de ejemplo para la tabla
    const estudiantes = [
        { id: 1, nombre: 'Juan Pérez', curso: 'Matemáticas', estado: 'Activo' },
        { id: 2, nombre: 'María López', curso: 'Historia', estado: 'Inactivo' },
        { id: 3, nombre: 'Carlos García', curso: 'Biología', estado: 'Activo' },
        { id: 4, nombre: 'Laura Martínez', curso: 'Química', estado: 'Inactivo' },
    ];

    return (
        <MainLayout>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <h2>Matrícula</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Curso</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {estudiantes.map((estudiante) => (
                                    <tr key={estudiante.id}>
                                        <td>{estudiante.nombre}</td>
                                        <td>{estudiante.curso}</td>
                                        <td>{estudiante.estado}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Acciones">
                                                <button type="button" className="btn btn-sm btn-primary">
                                                    Editar
                                                </button>
                                                <button type="button" className="btn btn-sm btn-danger">
                                                    Eliminar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-grid gap-2 mb-3">
                            <Link to="/matricula/nueva" className="btn btn-success">
                                New
                            </Link>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Filtros</h5>
                                {/* Aquí puedes colocar los filtros */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default MatriculaMatricula;
