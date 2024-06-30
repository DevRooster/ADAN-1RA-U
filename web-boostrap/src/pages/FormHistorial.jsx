import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';

const FormHistorial = () => {
    const [formData, setFormData] = useState({
        institucion: '',
        promedio: '',
        observaciones: '',
        fechaInicio: '',
        fechaFin: '',
        estudiante_id: ''
    });
    const [estudiantes, setEstudiantes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState({
        type: '',
        message: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetchEstudiantes();
    }, []);

    const fetchEstudiantes = async () => {
        try {
            const response = await axios.get('http://localhost:82/estudiante');
            setEstudiantes(response.data);
        } catch (error) {
            console.error('Error al obtener los estudiantes:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:82/historialacademico', {
                institucion: formData.institucion,
                promedio: formData.promedio,
                observaciones: formData.observaciones,
                fechaInicio: formData.fechaInicio,
                fechaFin: formData.fechaFin,
                estudiante: {
                    id: formData.estudiante_id
                }
            });
            setFeedbackMessage({ type: 'success', message: 'Historial creado correctamente.' });
            setTimeout(() => {
                navigate('/historial');
            }, 1000);
        } catch (error) {
            console.error('Error al crear historial:', error);
            setFeedbackMessage({ type: 'error', message: 'Error al crear historial. Por favor, inténtalo de nuevo.' });
        } finally {
            setIsLoading(false);
        }
    };

    const validateForm = () => {
        const { institucion, promedio, observaciones, fechaInicio, fechaFin, estudiante_id } = formData;
        if (!institucion || !promedio || !observaciones || !fechaInicio || !fechaFin || !estudiante_id) {
            setFeedbackMessage({ type: 'error', message: 'Por favor completa todos los campos.' });
            return false;
        }
        return true;
    };

    const handleCancel = () => {
        navigate('/historial');
    };

    return (
        <MainLayout>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-success">
                            <div className="card-body">
                                <h2 className="card-title text-success mb-4">Nuevo Historial</h2>
                                {isLoading && (
                                    <div className="alert alert-info" role="alert">
                                        Procesando... por favor espera.
                                    </div>
                                )}
                                {feedbackMessage.type === 'success' && (
                                    <div className="alert alert-success" role="alert">
                                        {feedbackMessage.message}
                                    </div>
                                )}
                                {feedbackMessage.type === 'error' && (
                                    <div className="alert alert-danger" role="alert">
                                        {feedbackMessage.message}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="institucion" className="form-label">Institución</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="institucion"
                                                    name="institucion"
                                                    value={formData.institucion}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="promedio" className="form-label">Promedio</label>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    className="form-control"
                                                    id="promedio"
                                                    name="promedio"
                                                    value={formData.promedio}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="observaciones" className="form-label">Observaciones</label>
                                                <textarea
                                                    className="form-control"
                                                    id="observaciones"
                                                    name="observaciones"
                                                    value={formData.observaciones}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="fechaInicio" className="form-label">Fecha de Inicio</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="fechaInicio"
                                                    name="fechaInicio"
                                                    value={formData.fechaInicio}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="fechaFin" className="form-label">Fecha de Fin</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="fechaFin"
                                                    name="fechaFin"
                                                    value={formData.fechaFin}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="estudiante_id" className="form-label">Estudiante</label>
                                                <select
                                                    className="form-select"
                                                    id="estudiante_id"
                                                    name="estudiante_id"
                                                    value={formData.estudiante_id}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Selecciona un estudiante...</option>
                                                    {estudiantes.map(estudiante => (
                                                        <option key={estudiante.id} value={estudiante.id}>
                                                            {estudiante.nombre}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mt-4">
                                        <button type="button" className="btn btn-danger me-2" onClick={handleCancel}>Cancelar</button>
                                        <button type="submit" className="btn btn-success">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default FormHistorial;