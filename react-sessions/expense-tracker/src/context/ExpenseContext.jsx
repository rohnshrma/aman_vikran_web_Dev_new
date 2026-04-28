import { createContext, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
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
    <ExpenseContext.Provider
      value={{ expenses, addExpenseHandler, deleteTaskHandler }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
