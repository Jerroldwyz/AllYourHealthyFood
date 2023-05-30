import React from 'react';
import "./styles.css";
import products from './productsData';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Product Catalogue</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div
                className="product-image"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-rating">Rating: {product.rating}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;