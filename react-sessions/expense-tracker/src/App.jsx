import React, { useState } from "react";
import AddExpense from "./Components/AddExpense";
import Expense from "./Components/Expense";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseObj) => {
    setExpenses((prevExpenses) => [expenseObj, ...prevExpenses]);
  };

  const deleteTaskHandler = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <main className="app">
      <section className="expense-container">
        <h1 className="expense-title">Expense Tracker</h1>
        <AddExpense onAdd={addExpenseHandler} />

        {expenses.length === 0 ? (
          <p className="empty-message">No expenses yet. Add one to get started.</p>
        ) : (
          <ul className="expense-list">
            {expenses.map((expense) => (
              <Expense
                expense={expense}
                key={expense.id}
                onDelete={deleteTaskHandler}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default App;
