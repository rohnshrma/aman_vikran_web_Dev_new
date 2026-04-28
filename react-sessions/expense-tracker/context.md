# Understanding React Context In Our Expense Tracker

This note explains React Context deeply, but in a practical way based on our current app code.

## 1. What Is Context?

`Context` is React’s built-in way to share data and functions across many components without passing them manually at every level through props.

In simple words:

- Props are great for parent -> child communication.
- Context is useful when many components in different parts of the tree need the same data/actions.

Context is not a replacement for all state. It is a tool for **shared state**.

## 2. Why Context Exists: The Prop Drilling Problem

Before Context, if a deep child needed data, we had to pass props through every intermediate component, even if those middle components did not use the data.

Example shape (before Context):

`Root -> App -> Section -> List -> ExpenseItem`

If `ExpenseItem` needs `deleteExpense`, then `Root`, `App`, `Section`, and `List` all have to forward that prop. This creates:

- boilerplate prop forwarding
- tightly coupled component layers
- harder refactors (renaming or adding props touches many files)
- lower readability (components receive props they do not care about)

That manual forwarding is called **prop drilling**.

Context solves this by making data available from a shared provider boundary.

## 3. Mental Model: Provider And Consumers

Context has 3 core parts:

1. `createContext()`
- Creates a context object (a shared channel).

2. `Provider`
- Wraps part of the app tree.
- Supplies a `value` object.
- Any component inside can read this value.

3. `useContext(ContextName)`
- Used inside child components.
- Reads current value from nearest matching provider above it.

Think of Provider like a controlled "shared state zone" for a subtree.

## 4. How We Applied Context In This App

### File: `src/context/ExpenseContext.jsx`

This file is our Context hub.

It does three important jobs:

1. Creates the context:

```jsx
const ExpenseContext = createContext();
```

2. Owns shared state:

```jsx
const [expenses, setExpenses] = useState([]);
```

3. Exposes shared actions through provider `value`:

```jsx
value={{ expenses, addExpenseHandler, deleteTaskHandler }}
```

So this file acts like a small state service for expenses.

### File: `src/main.jsx`

We wrapped the app with `ExpenseProvider`:

```jsx
<ExpenseProvider>
  <App />
</ExpenseProvider>
```

This means every component inside `App` can access expense state/actions through Context.

### File: `src/Components/AddExpense.jsx`

This component consumes only what it needs:

```jsx
const { addExpenseHandler } = useContext(ExpenseContext);
```

After validation and ID generation, it calls `addExpenseHandler(newExpense)`.

### File: `src/Components/Expenses.jsx`

This component consumes:

```jsx
const { expenses } = useContext(ExpenseContext);
```

It renders empty state or list state based on `expenses.length`.

### File: `src/Components/Expense.jsx`

Each row consumes:

```jsx
const { deleteTaskHandler } = useContext(ExpenseContext);
```

When delete is clicked, it removes that item from shared state.

## 5. Data Flow In Our Current App

The full runtime flow is:

1. User submits form in `AddExpense`.
2. `addExpenseHandler` updates `expenses` in provider state.
3. Provider value changes.
4. Components reading `expenses` re-render (`Expenses` list updates).
5. User clicks delete in `Expense`.
6. `deleteTaskHandler` filters out item by `id`.
7. Provider state changes again; list re-renders.

Important point: `AddExpense` and `Expense` do not directly talk to each other.  
They communicate through shared Context state.

## 6. What Improved Compared To Prop Drilling

With Context:

- `App.jsx` stays clean (no state-lifting boilerplate for expenses).
- `AddExpense` can add without receiving handler props.
- `Expense` can delete without long prop chains.
- `Expenses` reads list directly from source of truth.
- moving/restructuring intermediate components is easier because we are not forwarding props through each layer.

This gives us lower coupling and cleaner component APIs.

## 7. Why This Design Is Good For This Project

Our expense tracker has a classic shared-state case:

- one input area (`AddExpense`) writes data
- another area (`Expenses` / `Expense`) reads and mutates same data

When multiple sibling branches need the same state/actions, Context is a strong fit.

This keeps the architecture simple:

- Local UI/form logic stays local (`useReducer` inside `AddExpense`).
- Global feature data stays shared (`expenses` in Context).

That separation is clean and scalable.

## 8. Context Benefits (Practical, Not Marketing)

1. Better maintainability
- State logic is centralized in one provider file.

2. Better readability
- Consumer components declare exactly what they use from Context.

3. Easier extension
- We can later add `editExpense`, `totalAmount`, or persistent storage in one place.

4. Less prop noise
- Components do not receive irrelevant pass-through props.

5. Consistent source of truth
- All consumers read the same `expenses` array from provider state.

## 9. When Context Helps, And When Not To Use It

Use Context when:

- data is shared across multiple distant components
- prop drilling is growing
- state changes should be reflected across many consumers

Avoid Context when:

- state is truly local to one component
- data changes extremely frequently and broad re-renders become expensive

For this app’s size and flow, Context is appropriate and clean.

## 10. One Small Naming Improvement In Our Code

In `ExpenseContext.jsx`, `deleteTaskHandler` works correctly but naming can be clearer:

- current: `deleteTaskHandler`
- better: `deleteExpenseHandler`

This is only naming quality, not a behavior issue.

## 11. Final Takeaway

Context helped us convert shared expense behavior from "pass everything through props" to a focused provider-consumer model.

In this app:

- Context is the shared state boundary.
- `ExpenseProvider` is the source of truth for expense list operations.
- Consumer components stay smaller, clearer, and less coupled.

That is exactly where Context creates real value.
