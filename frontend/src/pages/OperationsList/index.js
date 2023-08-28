import React, { useState, useEffect } from 'react';
import { loggedCpf } from '../LoggedArea';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import '../../assets/styles/operationList.css';

function OperationList() {
  const [operations, setOperations] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchOperations();
  }, []);

  async function fetchOperations() {
    try {
      const response = await api.get('/operations');
      const filteredOperations = response.data.filter(
        (operation) => operation.cpf_client === loggedCpf
      );
      setOperations(filteredOperations);
    } catch (error) {
      console.error('Error fetching operations:', error);
    }
  }

  return (
    <div className="operation-list">
      <h1>Your Operations</h1>
      <ul>
        {operations.map((operation) => (
          <div className="operation-item" key={operation.id}>
            <p>Your CPF: {operation.cpf_client}</p>
            <p>Amount: {operation.amount}</p>
            <p>Prefered Bill: {operation.prefered_bill !== null ? operation.prefered_bill : 'none'}</p>
            <p>Status: {operation.status}</p>
          </div>
        ))}
      </ul>
      <button className="back-button" type="button" onClick={() => history.goBack()}>
        Back
      </button>
    </div>
  );
}

export default OperationList