import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [products] = useState([
        { id: '1', name: 'Nokia 3310', description: 'Ícono legendario de la resistencia industrial GSM.', price: 29990, category: 'Clásicos', image: '../src/assets/Nokia-3310.jpg' },
        { id: '2', name: 'Motorola StarTAC', description: 'Primer teléfono con diseño clamshell de tapa.', price: 45990, category: 'Clásicos', image: '../src/assets/Motorola-StarTAC.jpg' },
        { id: '3', name: 'Kyocera VP-210', description: 'Primer teléfono comercial con cámara integrada.', price: 89990, category: 'Cámaras', image: '../src/assets/Kyocera VP-210.jpeg' },
        { id: '4', name: 'Siemens S10', description: 'Hito técnico con la primera pantalla a color básica.', price: 39990, category: 'Clásicos', image: '../src/assets/Siemens S10.jpg' },
        { id: '5', name: 'Samsung SPH-M100', description: 'Primer celular capaz de reproducir archivos MP3.', price: 54990, category: 'Accesorios', image: '../src/assets/Samsung SPH-M100.jpg' }
    ]);

    const [cart, setCart] = useState([]);
    const [currentSection, setCurrentSection] = useState('catalogo');

    const addToCart = (product) => {
        const exist = cart.find(item => item.id === product.id);
        if (exist) {
            setCart(cart.map(item => item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    return (
        <AppContext.Provider value={{ products, cart, addToCart, currentSection, setCurrentSection }}>
            {children}
        </AppContext.Provider>
    );
}
