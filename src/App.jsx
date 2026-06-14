import React, { useContext } from 'react';
import { AppProvider, AppContext } from './context/AppContext';
import Cabecera from './components/Cabecera';
import Datos from './components/Datos';
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import './App.css';

function MainContent() {
    const { currentSection } = useContext(AppContext);
    switch(currentSection) {
        case 'catalogo': 
            return <Datos />;
        case 'carrito': 
            return <Carrito />;
        default: 
            return <Datos />;
    }
}

export default function App() {
    return (
        <AppProvider>
            <Cabecera />
            <main className="main-content">
                <MainContent />
            </main>
            <Footer />
        </AppProvider>
    );
}
