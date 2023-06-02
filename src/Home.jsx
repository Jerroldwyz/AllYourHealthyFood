import "./styles.css";
import { Link } from 'react-router-dom';
import userAccount from './backend/UserAccount';

function Home() {
  return (
    <div>
      <h1 class="text-center align-middle py-8 font-bold text-4xl">Product Catalogue</h1>
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
                <p className="product-rating">rating: {product.rating}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;