import React, { useState } from 'react';
import api from '../../services/api';
import { loggedCpf } from '../LoggedArea';

function DeleteAccount() {
  const [loading, setLoading] = useState(false);

  const handleDeleteAccount = async () => {
    setLoading(true);

    try {
      const response = await api.delete(`clientes/cpf/${loggedCpf}`);
      if (response.status === 204) {
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Delete Your Account</h2>
      <p>Are you sure you want to delete your account?</p>
      <button onClick={handleDeleteAccount} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete Account'}
      </button>
    </div>
  );
}

export default DeleteAccount