import React, { useState } from 'react';

import api from '../../services/api';
import '../../assets/styles/registerForm.css';

function UpdateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
      password
    };

    try {
      await api.put('/clientes', clientPayload);

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);

      alert('Registration updated successfully!');
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
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Cellphone</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="phone">Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="phone">Birth</label>
        <input
          type="text"
          name="birth"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input          
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateForm;