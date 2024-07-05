import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faFilter } from '@fortawesome/free-solid-svg-icons';

const AsistenciaTable = () => {
    const [registrosAsistencia, setRegistrosAsistencia] = useState([]);
    const [filtroEstudiante, setFiltroEstudiante] = useState('');
    const [filtroGrado, setFiltroGrado] = useState('');

    useEffect(() => {
        const fetchRegistrosAsistencia = async () => {
            try {
                const response = await axios.get('http://localhost:82/registroasistencia');
                console.log('Registros de asistencia:', response.data);
                setRegistrosAsistencia(response.data);
            } catch (error) {
                console.error('Error fetching registros de asistencia:', error);
            }
        };

        fetchRegistrosAsistencia();
    }, []);

    const handleEstudianteChange = (e) => {
        setFiltroEstudiante(e.target.value);
    };

    const handleGradoChange = (e) => {
        setFiltroGrado(e.target.value);
    };

    const filteredRegistros = registrosAsistencia.filter(registro => {
        return (
            registro.estudiante.toLowerCase().includes(filtroEstudiante.toLowerCase()) &&
            registro.grado.toLowerCase().includes(filtroGrado.toLowerCase())
        );
    });

    return (
        <MainLayout>
            {/* Controles de filtro */}
            <div className="mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><FontAwesomeIcon icon={faFilter} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Filtrar por Estudiante"
                                value={filtroEstudiante}
                                onChange={handleEstudianteChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><FontAwesomeIcon icon={faFilter} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Filtrar por Grado"
                                value={filtroGrado}
                                onChange={handleGradoChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabla para mostrar registros de asistencia filtrados */}
            <div className="mt-3">
                <h3>Registros de Asistencia</h3>
                <table className="table table-hover mt-3">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Estudiante</th>
                            <th scope="col">Asistencia</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Grado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRegistros.map((registro, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{registro.estudiante}</td>
                                <td>{registro.asistencia}</td>
                                <td>{registro.fecha}</td>
                                <td>{registro.grado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MainLayout>
    );
};

export default AsistenciaTable;