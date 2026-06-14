import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Carrito() {
    const { cart } = useContext(AppContext);
    const totalCost = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <div className="cart-box">
            <h2 style={{color: '#00ffcc', marginTop: 0, textShadow: '0 0 5px #00ffcc', borderBottom: '1px solid #222', paddingBottom: '10px'}}>
                Tu Cotización de Hardware
            </h2>
            
            {cart.length === 0 ? (
                <p style={{color: '#aaa', fontStyle: 'italic', margin: '20px 0'}}>
                    No has seleccionado hitos tecnológicos aún. Vuelve al catálogo.
                </p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div className="cart-item" key={item.id}>
                            <div className="cart-item-info">
                                <img 
                                    className="cart-thumb" 
                                    src={item.image} 
                                    alt={item.name} 
                                    onError={(e) => { e.target.src = "https://via.placeholder.com/50?text=HW"; }}
                                />
                                <div>
                                    <h4 style={{margin: '0 0 5px 0', color: '#fff'}}>{item.name}</h4>
                                    <span style={{fontSize: '13px', color: '#888'}}>{item.category}</span>
                                </div>
                            </div>
                            <div style={{textAlign: 'right'}}>
                                <div style={{color: '#ff007f', fontWeight: 'bold'}}>${(item.price * item.qty).toLocaleString('es-CL')} CLP</div>
                                <small style={{color: '#aaa'}}>{item.qty} x ${item.price.toLocaleString('es-CL')}</small>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        Total Estimado: ${totalCost.toLocaleString('es-CL')} CLP
                    </div>
                </div>
            )}
        </div>
    );
}
