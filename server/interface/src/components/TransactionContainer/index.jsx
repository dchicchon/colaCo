import React, { useState, useEffect } from 'react';
import Transaction from '../Transaction';
import { apiGetTransactions } from '../../utils/api';
import './style.css';

const TransactionContainer = function TransactionContainer() {
  const [transactions, setTrasanctions] = useState([]);

  const getTransactions = async () => {
    console.log('Getting Transactions');
    const result = await apiGetTransactions();
    setTrasanctions(result);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="transaction-container">
      <h3>Transaction History</h3>
      <div className="transaction-container-header">
        <span>ID</span>
        <span>Label</span>
        <span>Price</span>
        <span>Time</span>
      </div>
      {transactions.length && transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionContainer;