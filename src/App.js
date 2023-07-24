// App.js
import React, { useState } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    // Add the new transaction to the state (it will not be persisted to the backend)
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default App;
