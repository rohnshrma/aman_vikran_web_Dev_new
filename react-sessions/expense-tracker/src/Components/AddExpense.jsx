import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  name: "",
  amount: "",
};

const formReducer = (state, action) => {
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
  // `useReducer` is another way to manage state in React.
  // It is useful when we want one central place that decides
  // how state should change.
  //
  // `state` is the current form data:
  // { name: "", amount: "" }
  //
  // `dispatch` is the function we use to send instructions
  // to the reducer.
  const [state, dispatch] = useReducer(formReducer, initialState);

  const changeHandler = (e) => {
    // `e.target` is the input that the user is typing into.
    const { name, value } = e.target;

    // This is the most important concept in this component:
    //
    // The input's `name` attribute becomes the reducer action `type`.
    //
    // So:
    // Input name="name"   -> dispatch({ type: "name", payload: value })
    // Input name="amount" -> dispatch({ type: "amount", payload: value })
    //
    // That means the input tells the reducer WHICH field to update.
    //
    // This only works because these 3 things match each other:
    // 1. input `name`
    // 2. action `type`
    // 3. state key
    //
    // Example:
    // name="amount" -> type: "amount" -> updates state.amount
    dispatch({ type: name, payload: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // `trim()` removes extra spaces from the beginning and end.
    const cleanName = state.name.trim();

    // Validation:
    // - expense name should not be empty
    // - amount should be greater than 0
    //
    // Even though the input type is "number",
    // browser inputs still give us the value as a string.
    if (cleanName === "" || Number(state.amount) <= 0) {
      return;
    }

    // We pass the new expense object to the parent through `onAdd`.
    onAdd({
      ...state,
      name: cleanName,
      amount: Number(state.amount),
      id: uuidv4(),
    });

    // Reset the form back to its starting state after submit.
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
        // `value` connects the input to React state.
        // This is called a controlled input.
        //
        // Flow:
        // user types -> onChange runs -> dispatch happens
        // -> reducer updates state -> new state appears in input
        value={state.name}
      />
      <input
        className="expense-input"
        type="number"
        name="amount"
        onChange={changeHandler}
        placeholder="Expense Amount"
        // Because this input has `name="amount"`,
        // typing here sends an action with `type: "amount"`.
        value={state.amount}
      />
      <button className="expense-button" type="submit">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
