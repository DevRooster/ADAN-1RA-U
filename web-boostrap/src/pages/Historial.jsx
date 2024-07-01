import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';

const Historial = () => {
    const navigate = useNavigate();
    const [historiales, setHistoriales] = useState([]);

    useEffect(() => {
        const fetchHistoriales = async () => {
            try {
                const response = await axios.get('http://localhost:82/historialacademico');
                console.log('Datos de historiales:', response.data); // Verifica los datos en la consola
                setHistoriales(response.data);
            } catch (error) {
                console.error('Error fetching historiales:', error);
            }
        };

        fetchHistoriales();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:82/historialacademico/${id}`);
            setHistoriales(historiales.filter(historial => historial.id !== id));
            console.log(`Historial eliminado con éxito: ${id}`);
        } catch (error) {
            console.error('Error al eliminar historial:', error);
        }
    };

    const handleNew = () => {
        navigate('/historial/form');
    };

    const handleGeneratePDF = (historial) => {
        const doc = new jsPDF();

        // Construir el contenido del PDF como texto
        const content = `
            +---------------------------+
            | Historial Académico |
            +---------------------------+
            Institución: ${historial.institucion}
            Promedio: ${historial.promedio}
            Observaciones: ${historial.observaciones}
            Fecha Inicio: ${historial.fechaInicio}
            Fecha Fin: ${historial.fechaFin}
            Estudiante: ${historial.estudiante.nombre}
        `;

        // Agregar el contenido al PDF
        doc.text(content, 10, 10);

        // Descargar el PDF
        doc.save(`historial_${historial.id}.pdf`);
    };

    return (
        <MainLayout>
            <div className="container-fluid mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-success">Historial Académico</h2>
                    <button className="btn btn-primary btn-custom" onClick={handleNew}>Nuevo</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Institución</th>
                                <th scope="col">Promedio</th>
                                <th scope="col">Observaciones</th>
                                <th scope="col">Fecha Inicio</th>
                                <th scope="col">Fecha Fin</th>
                                <th scope="col">Estudiante</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historiales.map(historial => (
                                <tr key={historial.id}>
                                    <td>{historial.id}</td>
                                    <td>{historial.institucion}</td>
                                    <td>{historial.promedio}</td>
                                    <td>{historial.observaciones}</td>
                                    <td>{historial.fechaInicio}</td>
                                    <td>{historial.fechaFin}</td>
                                    <td>{historial.estudiante.nombre}</td>
                                    <td>
                                        <button
                                            className="action-btn ms-2"
                                            onClick={() => handleDelete(historial.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                        <button
                                            className="action-btn ms-2"
                                            onClick={() => handleGeneratePDF(historial)}
                                        >
                                            <FontAwesomeIcon icon={faFilePdf} />
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
};

export default Historial;