import React, { useEffect } from 'react';

function CartModal({ isOpen, onClose, cartItems }) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('cart-modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-content">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        <div className="cart-actions">
          <button onClick={() => console.log('Checkout')}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
