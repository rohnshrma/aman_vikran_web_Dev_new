import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  name: "",
  amount: "",
};

const formReducer = (state, action) => {
  console.log(action);

  if (action.type === "name" || action.type === "amount") {
    return {
      ...state,
      [action.type]: action.payload,
    };
  } else if (action.type === "RESET") {
    return initialState;
  } else {
    return state;
  }
};

const AddExpense = ({ onAdd }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `${name}`, payload: value });
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
        onChange={changeHandler}
        name="name"
        placeholder="Expense Name"
        value={state.name}
      />
      <input
        className="expense-input"
        type="number"
        name="amount"
        onChange={changeHandler}
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
