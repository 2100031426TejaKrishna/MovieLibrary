import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';
import '../components/cssfiles/register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    email: '',
    password: '',
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === formData.email);

    if (userExists) {
      setError('User already exists with this email.');
      return;
    }

    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    setIsRegistered(true);
    setError('');

    setFormData({
      name: '',
      dob: '',
      gender: '',
      email: '',
      password: '',
    });
  };

  const confettiConfig = {
    angle: 90,
    spread: 180,
    startVelocity: 30,
    elementCount: 50,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '20px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  return (
    <div className="register-form-container">
      <center>
        <form onSubmit={handleSubmit}>
          <h2>Register Here</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </label>
          <label>
            Date of Birth:
            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required />
          </label>
          <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleInputChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          </label>
          <button type="submit">Register</button>
        </form>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Confetti active={isRegistered} config={confettiConfig} />
        </div>

        {isRegistered && (
          <p>
            You have successfully registered! 🎉
            <br />
            Login <Link to="/">here</Link>.
          </p>
        )}
      </center>
    </div>
  );
};

export default Register;
