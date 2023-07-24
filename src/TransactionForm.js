import React, { useState } from 'react';

const TransactionForm = ({ onAdd }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ date, description, amount, category });
    setDate('');
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="dateInput">Date:</label>
      <input
        type="date"
        id="dateInput"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label htmlFor="descriptionInput">Description:</label>
      <input
        type="text"
        id="descriptionInput"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label htmlFor="amountInput">Amount:</label>
      <input
        type="number"
        id="amountInput"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <label htmlFor="categoryInput">Category:</label>
      <input
        type="text"
        id="categoryInput"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
