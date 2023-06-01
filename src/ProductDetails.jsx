import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './productsData';
import './ProductDetails.css'; // Import the CSS file
import CartModal from './CartModal';
import userAccount from './backend/UserAccount';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(Number(e.target.value), 1));
  };

  const handleAddToCart = () => {
    userAccount.addItemToCart(product.id, quantity);
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <div className="add-to-cart">
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
          />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <CartModal isOpen={isCartOpen} onClose={handleCloseCart}/>
    </div>
  );
}

export default ProductDetails;
