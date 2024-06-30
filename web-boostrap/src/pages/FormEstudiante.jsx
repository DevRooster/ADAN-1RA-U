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
    const [gradoActual, setGradoActual] = useState(''); // Estado para el grado actual
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar la carga
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoEstudiante = {
            nombre: nombre,
            fechaNacimiento: fechaNacimiento,
            dni: dni, // Utiliza 'dni' en lugar de 'DNI'
            direccion: direccion,
            telefono: telefono,
            email: email,
            gradoActual: gradoActual
        };

        setIsLoading(true); // Activar el estado de carga

        try {
            // Mostrar mensaje de "Procesando" por 1 segundo
            setTimeout(async () => {
                const response = await axios.post('http://localhost:82/estudiante', nuevoEstudiante);
                console.log('Estudiante creado:', response.data);
                setSuccessMessage('Estudiante creado correctamente.');
                setErrorMessage('');
                // Mostrar mensaje de éxito por 1 segundo antes de redirigir
                setTimeout(() => {
                    navigate('/estudiante');
                }, 1000);
            }, 1000); // Esperar 1 segundo antes de enviar la solicitud
        } catch (error) {
            console.error('Error al crear estudiante:', error);
            setErrorMessage('Error al crear estudiante. Por favor, inténtalo de nuevo.');
            setSuccessMessage('');
        } finally {
            // Desactivar el estado de carga después de la operación
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        navigate('/estudiante');
    };

    const handleTelefonoChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Solo permite dígitos
        setTelefono(value);
    };

    return (
        <MainLayout>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-success">
                            <div className="card-body bg-dark text-light">
                                <h2 className="card-title text-success mb-4">Nuevo Estudiante</h2>
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
                                            <label htmlFor="nombre" className="form-label text-light">Nombre</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="nombre"
                                                name="nombre"
                                                value={nombre}
                                                onChange={(e) => setNombre(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="fechaNacimiento" className="form-label text-light">Fecha de Nacimiento</label>
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
                                            <label htmlFor="dni" className="form-label text-light">DNI</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="dni"
                                                name="dni"
                                                value={dni}
                                                onChange={(e) => setDni(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="direccion" className="form-label text-light">Dirección</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="direccion"
                                                name="direccion"
                                                value={direccion}
                                                onChange={(e) => setDireccion(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="telefono" className="form-label text-light">Teléfono</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="telefono"
                                                name="telefono"
                                                value={telefono}
                                                onChange={handleTelefonoChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label text-light">E-mail</label>
                                            <input
                                                type="email"
                                                className="form-control border-success"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="gradoActual" className="form-label text-light">Grado Actual</label>
                                            <select
                                                className="form-select border-success"
                                                id="gradoActual"
                                                name="gradoActual"
                                                value={gradoActual}
                                                onChange={(e) => setGradoActual(e.target.value)}
                                                required
                                            >
                                                <option value="">Selecciona el Grado Actual</option>
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