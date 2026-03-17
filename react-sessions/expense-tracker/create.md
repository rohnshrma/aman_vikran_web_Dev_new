# Expense Tracker Instructions

Create a simple and modern **Expense Tracker** React app.

Use only:

- `App.js`
- `App.css`

Do not create any extra components.

Your app should let the user:

- add an expense
- view all expenses
- delete an expense

Each expense should show:

- expense name
- amount
- delete button

The full logic should be written inside `App.js`, and the styling should be written inside `App.css`.

---

## What You Need To Build

Build a single-page expense tracker with:

- one input for expense name
- one input for amount
- one add button
- a list of all added expenses
- a delete button for every expense

Use React `useState` to:

- store the expense name input
- store the amount input
- store all expenses in an array

---

## Step 1. Set Up `App.js`

Inside `App.js`, import React, `useState`, and `App.css`.

Use this:

```jsx
import React, { useState } from "react";
import "./App.css";
```

Then create your `App` function component.

---

## Step 2. Create State

Inside the `App` component, create 3 state variables:

- one for expense name
- one for amount
- one for all expenses

Use this structure:

```jsx
const [expenseName, setExpenseName] = useState("");
const [amount, setAmount] = useState("");
const [expenses, setExpenses] = useState([]);
```

---

## Step 3. Plan The Expense Object

Whenever the user adds a new expense, store it as an object inside the `expenses` array.

Each object can look like this:

```jsx
{
  id: Date.now(),
  name: expenseName,
  amount: amount
}
```

`id` is needed so that each item can be deleted correctly.

---

## Step 4. Create The Main Layout

Inside `return()`, create the main structure of the app.

Use these class names exactly so that your `App.css` styling matches:

- `app`
- `expense-container`
- `expense-title`
- `expense-form`
- `expense-input`
- `expense-button`
- `expense-list`
- `expense-item`
- `expense-details`
- `expense-name`
- `expense-amount`
- `delete-button`
- `empty-message`

Use a structure like this:

```jsx
<div className="app">
  <div className="expense-container">
    <h1 className="expense-title">Expense Tracker</h1>

    <form className="expense-form">
      <input className="expense-input" />
      <input className="expense-input" />
      <button className="expense-button">Add Expense</button>
    </form>

    <div className="expense-list"></div>
  </div>
</div>
```

---

## Step 5. Create The Form Inputs

Inside the form, create:

- one input for expense name
- one input for amount
- one button to submit the form

Make both inputs controlled inputs.

That means:

- `value` should come from state
- `onChange` should update state

Example:

```jsx
<input
  type="text"
  placeholder="Enter expense name"
  className="expense-input"
  value={expenseName}
  onChange={(e) => setExpenseName(e.target.value)}
/>

<input
  type="number"
  placeholder="Enter amount"
  className="expense-input"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>
```

---

## Step 6. Create The Add Expense Function

Now create a function to add a new expense when the form is submitted.

This function should:

- stop page refresh using `e.preventDefault()`
- check that both fields are filled
- create a new expense object
- store it inside the `expenses` array
- clear both input fields after adding

Example:

```jsx
const handleAddExpense = (e) => {
  e.preventDefault();

  if (!expenseName.trim() || !amount.trim()) return;

  const newExpense = {
    id: Date.now(),
    name: expenseName,
    amount: amount,
  };

  setExpenses([...expenses, newExpense]);
  setExpenseName("");
  setAmount("");
};
```

Attach this function to the form:

```jsx
<form className="expense-form" onSubmit={handleAddExpense}>
```

---

## Step 7. Show All Expenses

Below the form, display all expenses from the `expenses` array.

Use `map()` to loop through the array.

For every expense, show:

- expense name
- amount
- delete button

Example:

```jsx
<div className="expense-list">
  {expenses.map((expense) => (
    <div className="expense-item" key={expense.id}>
      <div className="expense-details">
        <span className="expense-name">{expense.name}</span>
        <span className="expense-amount">Rs. {expense.amount}</span>
      </div>
      <button className="delete-button">Delete</button>
    </div>
  ))}
</div>
```

---

## Step 8. Show A Message When There Are No Expenses

If no expenses have been added yet, show a simple message instead of an empty list.

Example:

```jsx
{expenses.length === 0 ? (
  <p className="empty-message">No expenses added yet.</p>
) : (
  <div className="expense-list">
    {/* map expenses here */}
  </div>
)}
```

---

## Step 9. Create The Delete Function

Create a function to remove an expense when the delete button is clicked.

Use `filter()` to keep all items except the one that was clicked.

Example:

```jsx
const handleDeleteExpense = (id) => {
  const updatedExpenses = expenses.filter((expense) => expense.id !== id);
  setExpenses(updatedExpenses);
};
```

Now connect it to the delete button:

```jsx
<button
  className="delete-button"
  onClick={() => handleDeleteExpense(expense.id)}
>
  Delete
</button>
```

---

## Step 10. Style The App In `App.css`

Use the provided `App.css` file for styling.

The design should look:

- simple
- modern
- clean
- beginner-friendly

The `App.css` file already matches these class names:

- `.app`
- `.expense-container`
- `.expense-title`
- `.expense-form`
- `.expense-input`
- `.expense-button`
- `.expense-list`
- `.expense-item`
- `.expense-details`
- `.expense-name`
- `.expense-amount`
- `.delete-button`
- `.empty-message`

Make sure the JSX in `App.js` uses the same class names exactly.

---

## Step 11. Final Structure Of `App.js`

Your `App.js` should finally contain:

- imports
- `App` function component
- 3 state variables
- `handleAddExpense`
- `handleDeleteExpense`
- JSX for form and list
- `export default App`

---

## Final Output

When your app runs:

1. The user enters an expense name.
2. The user enters the amount.
3. The user clicks `Add Expense`.
4. The expense appears in the list.
5. The list shows the expense name, amount, and delete button.
6. Clicking `Delete` removes that expense.

---

## Submission

Submit these 2 files:

- `App.js`
- `App.css`

Make sure:

- everything is written inside `App.js`
- the styling is written in `App.css`
- the class names match correctly
- add, show, and delete are working properly

---

## Helpful Tip

Build the app in this order:

1. create the UI
2. create the states
3. connect the inputs
4. add expenses
5. show expenses
6. delete expenses
7. check the final styling

If you follow the steps one by one, the project will be easy to complete.
