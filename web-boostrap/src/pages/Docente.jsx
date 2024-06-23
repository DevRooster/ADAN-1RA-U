import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

const Docente = () => {
    return (
        <MainLayout>
            <div className="container-fluid mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Matrículas</h2>
                    <Link to="/matricula/nueva" className="btn btn-success">New</Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Curso</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Aquí irán los datos de la tabla */}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    )
}

export default Docente
