import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  name: "",
  amount: "",
};

const formReducer = (state, action) => {
  if (action.type === "NAMECHANGE") {
    return {
      name: action.payload,
      amount: state.amount,
    };
  } else if (action.type === "AMOUNTCHANGE") {
    return {
      name: state.name,
      amount: action.payload,
    };
  } else if (action.type === "RESET") {
    return initialState;
  } else {
    return state;
  }
};

const AddExpense = ({ onAdd }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const nameChangeHandler = (e) => {
    const inputText = e.target.value;
    dispatch({ type: "NAMECHANGE", payload: inputText });
  };
  const amountChangeHandler = (e) => {
    const inputText = e.target.value;
    dispatch({ type: "AMOUNTCHANGE", payload: inputText });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const cleanName = state.name.trim();
    if (cleanName === "" || Number(state.amount) <= 0) {
      return;
    }

    onAdd({
      ...state,
      name: cleanName,
      amount: Number(state.amount),
      id: uuidv4(),
    });

    dispatch({ type: "RESET" });
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <input
        className="expense-input"
        type="text"
        onChange={nameChangeHandler}
        name="name"
        placeholder="Expense Name"
        value={state.name}
      />
      <input
        className="expense-input"
        type="number"
        name="amount"
        onChange={amountChangeHandler}
        placeholder="Expense Amount"
        value={state.amount}
      />
      <button className="expense-button" type="submit">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
