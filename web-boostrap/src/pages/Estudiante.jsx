import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Asegúrate de importar los estilos personalizados

const Estudiante = () => {
    const navigate = useNavigate();
    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        const fetchEstudiantes = async () => {
            try {
                const response = await axios.get('http://localhost:82/estudiante');
                console.log('Datos de estudiantes:', response.data); // Verifica los datos en la consola
                setEstudiantes(response.data);
            } catch (error) {
                console.error('Error fetching estudiantes:', error);
            }
        };

        fetchEstudiantes();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:82/estudiante/${id}`);
            setEstudiantes(estudiantes.filter(estudiante => estudiante.id !== id));
            console.log(`Estudiante eliminado con éxito: ${id}`);
        } catch (error) {
            console.error('Error al eliminar estudiante:', error);
        }
    };

    const handleNew = () => {
        navigate('/estudiante/form');
    };

    return (
        <MainLayout>
            <div className="container-fluid mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-success">Estudiantes</h2>
                    <button className="btn btn-primary btn-custom" onClick={handleNew}>Nuevo</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre y Apellidos</th>
                                <th scope="col">Fecha de Nacimiento</th>
                                <th scope="col">DNI</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Email</th>
                                <th scope="col">Grado Actual</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estudiantes.map(estudiante => (
                                <tr key={estudiante.id}>
                                    <td>{estudiante.id}</td>
                                    <td>{estudiante.nombre}</td>
                                    <td>{estudiante.fechaNacimiento}</td>
                                    <td>{estudiante.dni}</td>
                                    <td>{estudiante.direccion}</td>
                                    <td>{estudiante.telefono}</td>
                                    <td>{estudiante.email}</td>
                                    <td>{estudiante.gradoActual}</td>
                                    <td>
                                        <button
                                            className="action-btn ms-2"
                                            onClick={() => handleDelete(estudiante.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
}

export default Estudiante;