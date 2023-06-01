import React from 'react';
import './About.css';
import storeImage from './assets/logo/blacklogo.png';

function About() {
  return (
    <div className="about-container">
      <div className="store-image-container">
        <img src={storeImage} alt="All Your Healthy Foods Store" className="store-image" />
      </div>
      <div className="about-content">
        <p>
          All Your Healthy Foods is a premier online store dedicated to providing high-quality, 
          organic and natural foods to support a healthy lifestyle. We are located on Glenferrie Road, 
          offering a wide range of products that promote wellness and vitality.
        </p>
        <p>
          At All Your Healthy Foods, we believe that eating well is the foundation for overall well-being. 
          We carefully curate our selection to include only the finest organic produce, gluten-free options, 
          and other nutritious foods to cater to our customers' diverse dietary needs.
        </p>
        <p>
          Our mission is to make healthy eating convenient and accessible to everyone. We strive to empower 
          individuals to take charge of their health by providing them with the finest ingredients and products 
          that nourish the body and mind.
        </p>
        <p>
          Whether you are looking for fresh produce, superfoods, natural snacks, or supplements, we have got 
          you covered. Our dedicated team is passionate about health and wellness and is always ready to assist 
          you in finding the perfect products to support your healthy lifestyle.
        </p>
        <p>
          Shop with confidence at All Your Healthy Foods and embark on a journey towards better health and 
          vitality. We are committed to providing exceptional customer service and ensuring that you have an 
          enjoyable shopping experience with us.
        </p>
      </div>
    </div>
  );
}

export default About;
