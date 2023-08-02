import React from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import RegisterForm from '../../components/RegisterForm';
import atmIcon from '../../assets/images/fake-atm-icon.png';

import '../../assets/styles/landingPage.css';

function Logon() {
  return (    
    <>
      <HeaderComponent />
      <div id="landing-page" className="normal-page">
        <div className="form-container">
          <img id="icon" src={atmIcon} alt="ATM" />
          <RegisterForm />
        </div>
      </div>
    </>
  )
}

export default Logon;