import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loggedCpf } from '../LoggedArea';
import api from '../../services/api';
import '../../assets/styles/operationPage.css';

function OperationPage() {
  const [cpf, setCpf] = useState('');
  const [amount, setAmount] = useState('');
  const [prefered_bill, setPrefered_bill] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [amountError, setAmountError] = useState('');
  const history = useHistory();

  const validateCPF = () => {
    return formatCPF(cpf) === loggedCpf;
  };

  const formatCPF = (cpf) => {
    const cpfNumbers = cpf.replace(/\D/g, '');
    return cpfNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCPF()) {
      alert('CPF does not match the logged user.');
      return;
    }

    setLoading(true);

    try {
      if (parseInt(amount) > 5000) {
        setAmountError('Amount cannot be greater than 5000.');
        return;
      }

      const operationData = {
        cpf: formatCPF(cpf),
        amount,
        prefered_bill: prefered_bill !== '' ? parseInt(prefered_bill) : null
      };

      await api.post('/operations', operationData);
      clearForm();
      setSuccessMessage('Operation created successfully!');
    } catch (error) {
      console.error('Error creating operation:', error);
    } finally {
      setLoading(false);
    }
  }

  const clearForm = () => {
    setCpf('');
    setAmount('');
    setPrefered_bill('');
    setAmountError('');
  }

  return (
    <div className="operation-page">
      <h1>Operation Page</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Your CPF
          <input
            type="text"
            placeholder= "Enter your CPF"
            value={formatCPF(cpf)}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Amount
          <input
            type="number"
            value={amount}
            placeholder= "Enter the value of the operation"
            onChange={(e) => {
              setAmount(e.target.value);
              setAmountError('');
            }}
            required
          />
        </label>
        {amountError && <p className="error-message">{amountError}</p>}
        <br />
        <label>
          Prefered Bill
          <input
            type="number"
            placeholder= "Enter if you have bill preference"
            value={prefered_bill}
            onChange={(e) => setPrefered_bill(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          Create Operation
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button type="button" onClick={() => history.push('/operation-list')}>
        My Operations
      </button>
      <button className="back-button" type="button" onClick={() => history.goBack()}>
        Back
      </button>
    </div>
  );
}

export default OperationPage