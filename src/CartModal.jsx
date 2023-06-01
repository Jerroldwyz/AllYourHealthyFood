import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userAccount from './backend/UserAccount';

function CartModal({ isOpen, onClose}) {
  const navigate = useNavigate();

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

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-content">
        <h2>Cart</h2>
        {userAccount.getShoppingCartList().length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {userAccount.getShoppingCartList().map((item) => (
              <li key={item.item.id}>
                {item.item.name} - ${item.item.price} - x{item.quantity}
              </li>
            ))}
          </ul>
        )}
        <div className="cart-actions">
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
