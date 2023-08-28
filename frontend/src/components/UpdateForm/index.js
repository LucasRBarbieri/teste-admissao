import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import '../../assets/styles/registerForm.css';

function UpdateForm({ onFormSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [admin] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if(loading) return;
    setLoading(true);

    const clientPayload = {
      name,
      email,
      phone,
      cpf: localStorage.getItem('cpf'),
      address,
      birth,
      password,
      admin: localStorage.getItem('admin')
    };

    function handleLogOut() {
      localStorage.clear();
      history.push('/');
    }

    try {
      await api.put('/clientes', clientPayload);

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);
      localStorage.setItem('address', address);
      localStorage.setItem('birth', birth);
      localStorage.setItem('admin', admin);

      alert('Registration updated successfully!');
      handleLogOut();
    } catch (err) {
      alert('There was a failure in the registration update!');
    } finally {
      setLoading(false);
      window.location.reload(); 
    }
  };

  return (
    <div id="register-form">
      <h1 id="header-title">Registration update</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="phone">Cellphone</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          minLength={10}
          maxLength={14}
          required
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <label htmlFor="birth">Birth</label>
        <input
          type="date"
          name="birth"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input          
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button disabled={loading} type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateForm