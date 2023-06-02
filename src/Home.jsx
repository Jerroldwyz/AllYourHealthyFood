import "./styles.css";
import { Link } from 'react-router-dom';
import userAccount from './backend/UserAccount';
import { FaStar } from 'react-icons/fa';

function Home() {
  return (
    <div className ="home">
      <h1 className="product-catalogue" class="text-center align-middle py-8 font-bold text-4xl">Product Catalogue</h1>
      <div className="product-list">
        {userAccount.getCatalogue().map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div
                className="product-image"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <p className="product-price">${product.price}</p>
                <div className="product-rating">
                  {renderStarRating(product.rating)}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
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

export default Home;