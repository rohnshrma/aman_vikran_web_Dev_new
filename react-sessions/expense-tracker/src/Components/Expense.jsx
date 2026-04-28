import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const Expense = ({ expense }) => {
  const { deleteTaskHandler } = useContext(ExpenseContext);

  return (
    <li className="expense-item">
      <div className="expense-details">
        <div className="expense-name">{expense.name}</div>
        <div className="expense-amount">Rs. {expense.amount}</div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={() => deleteTaskHandler(expense.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Expense;
