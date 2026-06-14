import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Datos() {
    const { products, addToCart } = useContext(AppContext);

    return (
        <div>
            <h2 style={{color: '#00ffcc', marginTop: 0, textShadow: '0 0 5px #00ffcc'}}>
                Modelos Registrados en la Red
            </h2>
            <div className="catalog-grid">
                {products.map(p => (
                    <div className="product-card" key={p.id}>
                        <img 
                            className="phone-thumb" 
                            src={p.image} 
                            alt={p.name}
                            onError={(e) => { e.target.src = "https://via.placeholder.com/120?text=Hardware"; }}
                        />
                        <span className="prod-tag">{p.category}</span>
                        <h3 style={{margin: '10px 0 5px 0', color: '#fff'}}>{p.name}</h3>
                        <p style={{fontSize: '14px', color: '#aaa', margin: '0 0 10px 0', flexGrow: 1}}>{p.description}</p>
                        <div className="price-tag">${p.price.toLocaleString('es-CL')} CLP</div>
                        <button className="btn-action" onClick={() => addToCart(p)}>
                            Añadir a Cotización
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
