import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './productsData';
import './ProductDetails.css'; // Import the CSS file

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(Number(e.target.value), 1));
  };

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${quantity} quantity of product ${product.name} to cart`);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
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
    </div>
  );
}

export default ProductDetails;
