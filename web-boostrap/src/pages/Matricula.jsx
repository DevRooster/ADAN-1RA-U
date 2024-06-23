// src/pages/Matricula.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Matricula = () => {
    // Datos de ejemplo para la tabla
    const estudiantes = [
        { id: 1, nombre: 'Juan Pérez', curso: 'Matemáticas', estado: 'Activo' },
        { id: 2, nombre: 'María López', curso: 'Historia', estado: 'Inactivo' },
        { id: 3, nombre: 'Carlos García', curso: 'Biología', estado: 'Activo' },
        { id: 4, nombre: 'Laura Martínez', curso: 'Química', estado: 'Inactivo' },
    ];

    return (
        <MainLayout>

        </MainLayout>
    );
};

export default Matricula;
