import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';

const FormEstudiante = () => {
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [dni, setDni] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [gradoActual, setGradoActual] = useState(''); 
    const [isLoading, setIsLoading] = useState(false); 
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoEstudiante = {
            nombre: nombre,
            fechaNacimiento: fechaNacimiento,
            dni: dni, 
            direccion: direccion,
            telefono: telefono,
            email: email,
            gradoActual: gradoActual
        };

        setIsLoading(true); 

        try {
            setTimeout(async () => {
                const response = await axios.post('http://localhost:82/estudiante', nuevoEstudiante);
                console.log('Estudiante creado:', response.data);
                setSuccessMessage('Estudiante creado correctamente.');
                setErrorMessage('');
                setTimeout(() => {
                    navigate('/estudiante');
                }, 1000);
            }, 1000); 
        } catch (error) {
            console.error('Error al crear estudiante:', error);
            setErrorMessage('Error al crear estudiante. Por favor, inténtalo de nuevo.');
            setSuccessMessage('');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        navigate('/estudiante');
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
                                <h2 className="card-title mb-0">Nuevo Estudiante</h2>
                            </div>
                            <div className="card-body bg-white">
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
                                            <label htmlFor="nombre" className="form-label text-dark">Nombre</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="nombre"
                                                name="nombre"
                                                placeholder='Nombre Completo...'
                                                value={nombre}
                                                onChange={(e) => setNombre(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="fechaNacimiento" className="form-label text-dark">Fecha de Nacimiento</label>
                                            <input
                                                type="date"
                                                className="form-control border-success"
                                                id="fechaNacimiento"
                                                name="fechaNacimiento"
                                                value={fechaNacimiento}
                                                onChange={(e) => setFechaNacimiento(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="dni" className="form-label text-dark">N°Documento de Identidad</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="dni"
                                                name="dni"
                                                placeholder='Ingresa tu DNI...'
                                                value={dni}
                                                onChange={(e) => setDni(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="direccion" className="form-label text-dark">Dirección</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="direccion"
                                                name="direccion"
                                                placeholder='Ingresa tu Direccion...'
                                                value={direccion}
                                                onChange={(e) => setDireccion(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="telefono" className="form-label text-dark">Teléfono</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="telefono"
                                                name="telefono"
                                                placeholder='Ingresa tu Telefono...'
                                                value={telefono}
                                                onChange={handleTelefonoChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label text-dark">E-mail</label>
                                            <input
                                                type="email"
                                                className="form-control border-success"
                                                id="email"
                                                name="email"
                                                placeholder='Ingresa tu Correo...'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="gradoActual" className="form-label text-dark">Grado Actual</label>
                                            <select
                                                className="form-select border-success"
                                                id="gradoActual"
                                                name="gradoActual"
                                                value={gradoActual}
                                                onChange={(e) => setGradoActual(e.target.value)}
                                                required
                                            >
                                                <option value="" disabled>Selecciona el Grado Actual</option>
                                                <option value="4 Años">4 Años</option>
                                                <option value="5 Años">5 Años</option>
                                                <option value="6 Años">6 Años</option>
                                            </select>
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
}

export default FormEstudiante;