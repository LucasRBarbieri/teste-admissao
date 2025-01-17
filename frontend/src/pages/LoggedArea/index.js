import React, { useEffect, useState } from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import UpdateForm from '../../components/UpdateForm';
import '../../assets/styles/loggedArea.css';

export let loggedCpf = localStorage.getItem('cpf');
export let loggedAdmin = localStorage.getItem('admin');

function LoggedArea() {
  const [loggedName, setLoggedName] = useState('');
  const [loggedEmail, setLoggedEmail] = useState('');
  const [loggedPhone, setLoggedPhone] = useState('');
  const [loggedAddress, setLoggedAddress] = useState('');
  const [loggedBirth, setLoggedBirth] = useState('');

  useEffect(() => {
    const loggedUserName = localStorage.getItem('name');
    const loggedUserEmail = localStorage.getItem('email');
    const loggedUserPhone = localStorage.getItem('phone');
    const loggedUserAdress = localStorage.getItem('address');
    const loggedUserBirth = localStorage.getItem('birth');
    const loggedUserCpf = localStorage.getItem('cpf');
    const loggedUserAdmin = localStorage.getItem('admin');

    setLoggedName(loggedUserName);
    setLoggedEmail(loggedUserEmail);
    setLoggedAddress(loggedUserAdress);
    setLoggedBirth(loggedUserBirth);
    setLoggedPhone(loggedUserPhone);
    loggedCpf = loggedUserCpf;
    loggedAdmin = loggedUserAdmin;
  }, []);

  return (
    <>
      <HeaderComponent loggedName={loggedName} />
      <div id="logged-area" className="normal-page">
        <div id="data-columns">
          <div id="client-info">
            <h1>Your data</h1>
            <div id="data-list">
              <h4>Name</h4>
              <p>{loggedName}</p>
              <h4>E-mail</h4>
              <p>{loggedEmail}</p>
              <h4>Cellphone</h4>
              <p>{loggedPhone}</p>
              <h4>Address</h4>
              <p>{loggedAddress}</p>
              <h4>Birth</h4>
              <p>{loggedBirth}</p>
            </div>
          </div>
          <UpdateForm />
        </div>
      </div>
    </>
  );
}

export default LoggedArea