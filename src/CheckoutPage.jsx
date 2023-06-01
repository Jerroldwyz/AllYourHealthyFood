import { useState } from 'react';
import './CheckoutPage.css';
import userAccount from './backend/UserAccount';

function CheckoutPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [orderItems, setOrderItems] = useState([]);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform checkout logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Payment Method:', paymentMethod);
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    console.log('Order Items:', orderItems);

    // Reset the form
    setFullName('');
    setEmail('');
    setAddress('');
    setPaymentMethod('');
    setCardNumber('');
    setExpiryDate('');
    setCVV('');
    setOrderItems([]);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
              <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            {userAccount.getShoppingCartList().map((item) => (
              <li key={item.item.id}>{item.item.name} - ${item.item.price} - x{item.quantity}</li>
            ))}
          </ul>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={handleAddressChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="">Select Payment Method</option>
            <option value="paypal">PayPal</option>
            <option value="card">Card</option>
          </select>
        </div>
        {paymentMethod === 'card' && (
          <>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={handleCVVChange}
              />
            </div>
          </>
        )}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
