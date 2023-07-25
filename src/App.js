// App.js
import React, { useState } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
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
