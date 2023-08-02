import React, { useEffect, useState } from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import UpdateForm from '../../components/UpdateForm';
import '../../assets/styles/loggedArea.css';

function LoggedArea() {
  const [loggedName, setLoggedName] = useState('');
  const [loggedEmail, setLoggedEmail] = useState('');
  const [loggedPhone, setLoggedPhone] = useState('');
  const [loggedCpf, setLoggedCpf] = useState('');

  useEffect(() => {
    const loggedUserName = localStorage.getItem('name');
    const loggedUserEmail = localStorage.getItem('email');
    const loggedUserCpf = localStorage.getItem('cpf');
    const loggedUserPhone = localStorage.getItem('phone');

    setLoggedName(loggedUserName);
    setLoggedEmail(loggedUserEmail);
    setLoggedCpf(loggedUserCpf);
    setLoggedPhone(loggedUserPhone);
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
              <h4>CPF</h4>
              <p>{loggedCpf}</p>
            </div>
          </div>
          <UpdateForm />
        </div>
      </div>
    </>
  )
}

export default LoggedArea