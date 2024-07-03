import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="sliding-text-container">
                <div className="sliding-text">Desarrollo de Aplicaciones Distribuidas</div>
            </div>
            <div className="container-fluid p-0 main-content">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4 mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;