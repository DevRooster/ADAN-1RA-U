import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';

const FormDocente = () => {
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoDocente = {
            nombreCompleto,
            fechaNacimiento,
            direccion,
            telefono,
            email,
            especialidad
        };

        setIsLoading(true);

        try {
            setTimeout(async () => {
                const response = await axios.post('http://localhost:82/docente', nuevoDocente);
                setSuccessMessage('Docente creado correctamente.');
                setErrorMessage('');
                setTimeout(() => {
                    navigate('/docente');
                }, 1000);
            }, 1000);
        } catch (error) {
            setErrorMessage('Error al crear docente. Por favor, inténtalo de nuevo.');
            setSuccessMessage('');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        navigate('/docente');
    };

    const handleTelefonoChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setTelefono(value);
    };

    return (
        <MainLayout>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-light shadow-lg">
                            <div className="card-header bg-success text-white">
                                <h2 className="card-title mb-0">
                                    <i className="bi bi-person-plus me-2"></i>
                                    Nuevo Docente
                                </h2>
                            </div>
                            <div className="card-body text-dark">
                                {isLoading && (
                                    <div className="alert alert-info" role="alert">
                                        Procesando... por favor espera.
                                    </div>
                                )}
                                {successMessage && (
                                    <div className="alert alert-success" role="alert">
                                        {successMessage}
                                    </div>
                                )}
                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="nombres" className="form-label text-success">
                                                <i className="bi bi-person-fill me-1"></i>
                                                Nombres y Apellidos
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="nombres"
                                                placeholder="Ingresa nombres y apellidos"
                                                value={nombreCompleto}
                                                onChange={(e) => setNombreCompleto(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="fechaNacimiento" className="form-label text-success">
                                                <i className="bi bi-calendar3 me-1"></i>
                                                Fecha de Nacimiento
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control border-success"
                                                id="fechaNacimiento"
                                                value={fechaNacimiento}
                                                onChange={(e) => setFechaNacimiento(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="direccion" className="form-label text-success">
                                                <i className="bi bi-geo-alt-fill me-1"></i>
                                                Dirección
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="direccion"
                                                placeholder="Ingresa dirección"
                                                value={direccion}
                                                onChange={(e) => setDireccion(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="telefono" className="form-label text-success">
                                                <i className="bi bi-telephone-fill me-1"></i>
                                                Teléfono
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="telefono"
                                                placeholder="Ingresa teléfono"
                                                value={telefono}
                                                onChange={handleTelefonoChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label text-success">
                                                <i className="bi bi-envelope-fill me-1"></i>
                                                E-mail
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control border-success"
                                                id="email"
                                                placeholder="Ingresa e-mail"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="especialidad" className="form-label text-success">
                                                <i className="bi bi-book-fill me-1"></i>
                                                Especialidad
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="especialidad"
                                                placeholder="Ingresa especialidad"
                                                value={especialidad}
                                                onChange={(e) => setEspecialidad(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mt-4">
                                        <button type="button" className="btn btn-danger me-2" onClick={handleCancel}>
                                            <i className="bi bi-x-circle me-1"></i>
                                            Cancelar
                                        </button>
                                        <button type="submit" className="btn btn-success">
                                            <i className="bi bi-check-circle me-1"></i>
                                            Guardar
                                        </button>
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

export default FormDocente;