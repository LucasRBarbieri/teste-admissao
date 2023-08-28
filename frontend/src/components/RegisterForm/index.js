import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import '../../assets/styles/registerForm.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [admin] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const formatCPF = (cpf) => {
    const cpfNumbers = cpf.replace(/\D/g, '');
    return cpfNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const clientPayload = {
      name,
      email,
      phone,
      cpf: formatCPF(cpf),
      address,
      birth,
      password,
      admin
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
  }

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

        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          name="cpf"
          value={formatCPF(cpf)}
          onChange={(e) => setCpf(e.target.value)}
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

        <button disabled={loading} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default RegisterForm