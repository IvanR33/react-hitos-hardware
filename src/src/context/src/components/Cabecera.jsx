import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Cabecera() {
    const { currentSection, setCurrentSection, cart } = useContext(AppContext);
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <header>
            <div className="logo">MÓVIL LAB ARCHITECTURE</div>
            <div className="nav-menu">
                <button 
                    className={`nav-btn ${currentSection === 'catalogo' ? 'active' : ''}`} 
                    onClick={() => setCurrentSection('catalogo')}
                >
                    📱 Catálogo
                </button>
                <button 
                    className={`nav-btn ${currentSection === 'carrito' ? 'active' : ''}`} 
                    onClick={() => setCurrentSection('carrito')}
                >
                    🛒 Carrito ({totalItems})
                </button>
            </div>
        </header>
    );
}
