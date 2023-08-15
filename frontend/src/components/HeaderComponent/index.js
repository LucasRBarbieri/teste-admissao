import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import '../../assets/styles/header.css';

function HeaderComponent({ loggedName }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleLogOut() {
    localStorage.setItem('name', '');
    localStorage.setItem('email', '');
    localStorage.setItem('phone', '');
    localStorage.setItem('cpf', '');
    localStorage.setItem('address', '');
    localStorage.setItem('birth', '');
    history.push('/');
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formData = {
        email,
        password
      };

      await api.post('clientes/exists', formData);

      const { data } = await api.get(`/clientes/email/${email}`);

      localStorage.setItem('name', data[0].name);
      localStorage.setItem('email', data[0].email);
      localStorage.setItem('phone', data[0].phone);
      localStorage.setItem('cpf', data[0].cpf);
      localStorage.setItem('address', data[0].address);
      localStorage.setItem('birth', data[0].birth);

      history.push('/dashboard');
    } catch (error) {
      alert('There was a login failure!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="header">
      <h1 id="header-title">Fake ATM</h1>
      <div id="login-component">
        {loggedName ? (
          <div id="welcome-message">
            <h4>Hello, {loggedName}</h4>
            <button onClick={handleLogOut} type="button">Log Out</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                value={email}
                required
                placeholder="johncena@domain.com"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                required
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button disabled={loading} id="submit" type="submit">Log in</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default HeaderComponent