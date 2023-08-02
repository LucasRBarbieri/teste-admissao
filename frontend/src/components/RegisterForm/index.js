import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import '../../assets/styles/registerForm.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAdress] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
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
      cpf,
      address,
      birth,
      password
    };

    try {
      await api.post('/clientes', clientPayload);
      alert('Registration completed successfully!');
      history.push('/');
    } catch (err) {
      alert('There was a registration failure!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="register-form">
      <h1 id="header-title">Open your account!</h1>
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
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <label htmlFor="address">Adress</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAdress(e.target.value)}
        />
        <label htmlFor="birth">Birth</label>
        <input
          type="date"
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
        <button disabled={loading} type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default RegisterForm;