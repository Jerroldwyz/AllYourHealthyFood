import React from 'react';
import "./styles.css";
import products from './productsData';

function Home() {
  return (
    <div className="home">
      <h1 className="title">Product Catalogue</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div
              className="product-image"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-rating">Rating: {product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Home;