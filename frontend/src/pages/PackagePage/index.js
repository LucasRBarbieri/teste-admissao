import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import '../../assets/styles/packagePage.css';

function PackagePage() {
  const [packages, setPackages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await api.get('/pacotes')
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  return (
    <div className="package-page">
      <h1>Packages</h1>
      <div>
        {packages.map((pack) => (
            <div className="package-item" key={pack.id}>
              <p>Package ID: {pack.id}</p>
              <p>Created At: {pack.created_at}</p>
              <p>Closed At: {pack.closed_at}</p>
              <p>Bills Amount: {pack.bills_amount}</p>
              <p>Status: {pack.status}</p>
              <p>Used Bill: {pack.used_bill}</p>
            </div>
        ))}
      </div>
      <button className="back-button" type="button" onClick={() => history.goBack()}>
        Back
      </button>
    </div>
  );
}

export default PackagePage