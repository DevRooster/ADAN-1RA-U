import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Widget from '../components/Widget';

const Dashboard = () => {
    return (
        <MainLayout>
            <div className="container-fluid mt-4">
                <h1 style={{position:'relative', textAlign:'center', bottom:'40px'}}>Bienvenidos !!!</h1>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <Widget title="Vision" value="Nuestro objetivo es ser un centro educativo reconocido por su excelencia en la preparación inicial de los niños para su educación continua. Nos esforzamos por ser un modelo de innovación pedagógica y por inculcar a nuestros alumnos valores que fortalezcan su desarrollo integral y los preparen para enfrentar los retos futuros con confianza y responsabilidad" />
                    </div>
                    <div className="col-lg-6 mb-4">
                        <Widget title="Mision" value="Nos comprometemos a proporcionar un entorno seguro y afectuoso que fomente el crecimiento intelectual, emocional y social de cada niño. Nuestro enfoque educativo se basa en el respeto por la individualidad de cada alumno y en la promoción de una mentalidad de aprendizaje continuo. A través de métodos educativos adaptativos y personalizados, preparamos a nuestros estudiantes para convertirse en pensadores críticos, colaborativos y éticos desde los primeros años de vida." />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Dashboard;
