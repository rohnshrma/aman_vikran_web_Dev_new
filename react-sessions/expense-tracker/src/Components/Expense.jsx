import React from "react";

const Expense = ({ expense, onDelete }) => {
  return (
    <li className="expense-item">
      <div className="expense-details">
        <div className="expense-name">{expense.name}</div>
        <div className="expense-amount">Rs. {expense.amount}</div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={() => onDelete(expense.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Expense;
