import { useState } from 'react';
import './LoginPage.css'; // Import the CSS file
import { useNavigate, Link } from 'react-router-dom';
import userAccount from './backend/UserAccount';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userAccount.login(username, password)) {
      navigate("/profile");
    }
  };

  return (
    <div className="login-page">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="register-link">
        Not registered? <Link to="/register">Create an account</Link>
      </div>
    </div>
  );
}

export default LoginPage;
