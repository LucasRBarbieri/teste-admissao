import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loggedAdmin, loggedCpf } from '../../pages/LoggedArea';
import api from '../../services/api';
import '../../assets/styles/header.css';

function formatCPF(cpf) {
  const cpfNumbers = cpf.replace(/\D/g, '');
  return cpfNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function HeaderComponent({ loggedName }) {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const mountedRef = useRef(true);

  function handleLogOut() {
    localStorage.clear();
    history.push('/');
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formData = {
        cpf: formatCPF(cpf),
        password
      };

      const response = await api.post('clientes/exists', formData);
      const token = response.data.token;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const { data } = await api.get('/cliente');

      if (mountedRef.current) {
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        localStorage.setItem('phone', data.phone);
        localStorage.setItem('cpf', data.cpf);
        localStorage.setItem('address', data.address);
        localStorage.setItem('birth', data.birth);
        localStorage.setItem('admin', data.admin);

        history.push('/dashboard');
      }
    } catch (error) {
      console.log(error)
      alert('There was a login failure!');
    } finally {
      if (mountedRef.current) {
        setLoading(false);
      }
    }
  }

  const goToOperationPage = () => {
    history.push('/operation');
  }

  const goToPackagePage = () => {
    history.push('/package');
  }

  const handleAccountDeletion = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        await api.delete(`clientes/cpf/${loggedCpf}`);
        alert('Your account has been deleted.');
        handleLogOut();
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
  };

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <div id="header">
      <h1 id="header-title">Fake ATM</h1>
      <div id="login-component">
        {loggedName ? (
          <div id="welcome-message">
            <h4>Hello, {loggedName}</h4>
            <button onClick={handleLogOut} type="button">Log Out</button>
            <button onClick={goToOperationPage} type="button">Operation Page</button>
            {loggedAdmin === '1' && <button onClick={goToPackagePage} type="button">Package Page</button>}
            <button onClick={handleAccountDeletion} type="button">Delete Account</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <input
                type="string"
                value={formatCPF(cpf)}
                required
                placeholder="CPF"
                onChange={e => setCpf(e.target.value)}
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
  );
}

export default HeaderComponent