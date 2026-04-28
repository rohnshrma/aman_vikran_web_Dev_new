import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import Expense from "./Expense";

const Expenses = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div className="expense-area">
      {expenses.length === 0 ? (
        <p className="empty-message">
          No expenses yet. Add one to get started.
        </p>
      ) : (
        <ul className="expense-list">
          {expenses.map((expense) => (
            <Expense expense={expense} key={expense.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Expenses;
