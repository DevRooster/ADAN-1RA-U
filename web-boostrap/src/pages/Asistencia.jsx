import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Asegúrate de importar los estilos personalizados

const Asistencia = () => {
    const [estudiantes, setEstudiantes] = useState({});
    const [selectedAsistencia, setSelectedAsistencia] = useState({});
    const [loading, setLoading] = useState({});
    const [success, setSuccess] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage] = useState(5); // Número de estudiantes por página
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Fecha seleccionada, inicializada con la fecha actual

    useEffect(() => {
        const fetchEstudiantes = async () => {
            try {
                const response = await axios.get('http://localhost:82/estudiante');
                console.log('Datos de estudiantes:', response.data); // Verifica los datos en la consola
                // Organizar estudiantes por grados
                const estudiantesOrganizados = response.data.reduce((acc, estudiante) => {
                    const grado = estudiante.gradoActual;
                    if (!acc[grado]) {
                        acc[grado] = [];
                    }
                    acc[grado].push(estudiante);
                    return acc;
                }, {});
                setEstudiantes(estudiantesOrganizados);
            } catch (error) {
                console.error('Error fetching estudiantes:', error);
            }
        };

        fetchEstudiantes();
    }, []);

    const handleAsistenciaChange = (studentId, asistencia) => {
        setSelectedAsistencia(prevState => ({
            ...prevState,
            [studentId]: asistencia
        }));
    };

    const handleSave = async (estudiante) => {
        setLoading(prevState => ({
            ...prevState,
            [estudiante.id]: true
        }));

        const dataToSend = {
            estudiante: estudiante.nombre,
            asistencia: selectedAsistencia[estudiante.id] || 'falta', // Default to 'falta' if none selected
            fecha: selectedDate // Usar la fecha seleccionada
        };
        
        try {
            await axios.post('http://localhost:82/registroasistencia', dataToSend);
            setSuccess(prevState => ({
                ...prevState,
                [estudiante.id]: true
            }));
            console.log('Asistencia guardada con éxito:', dataToSend);
        } catch (error) {
            console.error('Error al guardar asistencia:', error);
        } finally {
            setLoading(prevState => ({
                ...prevState,
                [estudiante.id]: false
            }));
        }
    };

    // Función para obtener los estudiantes de la página actual
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    
    const renderEstudiantesPorGrado = () => {
        const gradosOrdenados = ['4 Años', '5 Años', '6 Años'];
        return gradosOrdenados.map(grado => (
            <div key={grado} className="col-md-6 mb-4">
                <h3>{`Grado: ${grado}`}</h3>
                {estudiantes[grado] && (
                    <>
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Estudiante</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Asistencia</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {estudiantes[grado].slice(indexOfFirstStudent, indexOfLastStudent).map(estudiante => (
                                        <tr key={estudiante.id}>
                                            <td>{estudiante.id}</td>
                                            <td>{estudiante.nombre}</td>
                                            <td>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={selectedDate}
                                                    onChange={(e) => setSelectedDate(e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`asistencia-${estudiante.id}`}
                                                        value="presente"
                                                        checked={selectedAsistencia[estudiante.id] === 'presente'}
                                                        onChange={() => handleAsistenciaChange(estudiante.id, 'presente')}
                                                    />
                                                    <label className="form-check-label" htmlFor={`asistencia-presente-${estudiante.id}`}>
                                                        Presente
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`asistencia-${estudiante.id}`}
                                                        value="tarde"
                                                        checked={selectedAsistencia[estudiante.id] === 'tarde'}
                                                        onChange={() => handleAsistenciaChange(estudiante.id, 'tarde')}
                                                    />
                                                    <label className="form-check-label" htmlFor={`asistencia-tarde-${estudiante.id}`}>
                                                        Tarde
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`asistencia-${estudiante.id}`}
                                                        value="falta"
                                                        checked={selectedAsistencia[estudiante.id] === 'falta'}
                                                        onChange={() => handleAsistenciaChange(estudiante.id, 'falta')}
                                                    />
                                                    <label className="form-check-label" htmlFor={`asistencia-falta-${estudiante.id}`}>
                                                        Falta
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <button 
                                                    className="btn btn-success" 
                                                    onClick={() => handleSave(estudiante)}
                                                    disabled={loading[estudiante.id]}
                                                >
                                                    {loading[estudiante.id] ? 'Guardando...' : 'Guardar'}
                                                </button>
                                                {success[estudiante.id] && <span className="text-success ms-2">Guardado!</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Aquí puedes agregar la paginación si es necesario */}
                    </>
                )}
            </div>
        ));
    };

    // Función para cambiar de página
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Calcular número total de páginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(estudiantes.length / studentsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <MainLayout>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-success">Asistencia</h2>
                    <input
                        type="date"
                        className="form-control"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>
                <div className="row">
                    {renderEstudiantesPorGrado()}
                </div>
                <nav className="mt-4">
                    <ul className="pagination justify-content-center">
                        {pageNumbers.map(number => (
                            <li key={number} className="page-item">
                                <button onClick={() => paginate(number)} className="page-link">
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </MainLayout>
    );
};

export default Asistencia;