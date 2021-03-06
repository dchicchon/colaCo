import React, { useState, useEffect } from 'react';
import Transaction from '../Transaction';
import API from '../../utils/api';
import './style.css';

const TransactionContainer = function TransactionContainer() {
  const [transactions, setTrasanctions] = useState([]);

  const getTransactions = () => {
    API.getTransactions()
      .then((result) => {
        setTrasanctions(result.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="container">
      <h3>Transaction History</h3>
      <div className="transaction-container-header">
        <span>ID</span>
        <span>Label</span>
        <span>Price</span>
        <span>Time</span>
      </div>
      {transactions.length ? transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      )) : 'No history found'}
    </div>
  );
};

export default TransactionContainer;
