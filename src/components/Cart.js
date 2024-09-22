import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.code} className="flex justify-between p-2 border-b">
                            <div>
                                <strong>{item.product_name}</strong> (x{item.quantity})
                            </div>
                            <button onClick={() => removeFromCart(item.code)} className="text-red-500">
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
