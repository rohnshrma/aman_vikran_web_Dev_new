import React from "react";
import AddExpense from "./Components/AddExpense";
import Expenses from "./Components/Expenses";
import "./App.css";

const App = () => {
  return (
    <main className="app">
      <section className="expense-container">
        <h1 className="expense-title">Expense Tracker</h1>
        <AddExpense />
        <Expenses />
      </section>
    </main>
  );
};

export default App;
