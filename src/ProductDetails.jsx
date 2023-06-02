import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import the CSS file
import CartModal from './CartModal';
import userAccount from './backend/UserAccount';

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
      <div class="flex-none w-72 mx-20 pt-20 relative">
      <img src={product.image} alt={product.name} />
      </div>
      <div class="mt-36">
      <div class="text-sm font-medium text-slate-400">
        In stock
      </div>
        <h2 className="name">{product.name}</h2>
        <p className="price">${product.price}</p>
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
