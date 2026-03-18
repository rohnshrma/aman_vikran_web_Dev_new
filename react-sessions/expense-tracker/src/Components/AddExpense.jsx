import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddExpense = ({ onAdd }) => {
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
  });

  const nameChangeHandler = (e) => {
    const inputText = e.target.value;
    setExpense((prevExpenses) => {
      return {
        name: inputText,
        amount: prevExpenses.amount,
      };
    });
  };
  const amountChangeHandler = (e) => {
    const inputText = e.target.value;
    setExpense((prevExpenses) => {
      return {
        amount: inputText,
        name: prevExpenses.name,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const cleanName = expense.name.trim();
    if (cleanName === "" || Number(expense.amount) <= 0) {
      return;
    }

    onAdd({
      ...expense,
      name: cleanName,
      amount: Number(expense.amount),
      id: uuidv4(),
    });

    setExpense({
      name: "",
      amount: "",
    });
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <input
        className="expense-input"
        type="text"
        onChange={nameChangeHandler}
        name="name"
        placeholder="Expense Name"
        value={expense.name}
      />
      <input
        className="expense-input"
        type="number"
        name="amount"
        onChange={amountChangeHandler}
        placeholder="Expense Amount"
        value={expense.amount}
      />
      <button className="expense-button" type="submit">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
