import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import the CSS file
import CartModal from './CartModal';
import userAccount from './backend/UserAccount';
import { FaStar } from 'react-icons/fa';

function ProductDetails() {
  const { id } = useParams();
  const product = userAccount.getItem(Number(id));
  const [quantity, setQuantity] = useState(1);
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
      <div className="flex-none w-72 mx-20 pt-20 relative">
      <img src={product.image} alt={product.name} />
      </div>
      <div className="mt-36">
      <div className="text-sm font-medium text-slate-400">
        In stock
      </div>
        <h2 className="name">{product.name}</h2>
        <p className="price">${product.price}</p>
        <div className="product-rating">
          {renderStarRating(product.rating)}
        </div>
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

function renderStarRating(rating) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <div className="star-icon-wrapper" key={i}>
        <FaStar className="star-icon"/>
      </div>
    );
  }
  return stars;
}

export default ProductDetails;
