# Foodly Starter App Implementation Guide

This project is a UI-only starter app for students.

The HTML structure, React components, and CSS design are already provided.
The business logic is intentionally missing.

Students should implement the application step by step.

## Project Goal

Build a food ordering app with:

- all dishes page
- single dish details page
- add new dish page
- admin update and delete features
- cart page
- optional checkout preparation

## Important Rule

Do not copy logic from outside sources without understanding it.
This starter is designed so students can practice:

- React state
- props
- forms
- conditional rendering
- list rendering
- routing
- CRUD operations
- cart management
- local storage or backend integration

## Current UI Already Available

The starter already includes presentational components for:

- app shell and header
- all dishes section
- single dish details section
- add dish form
- admin update form
- admin dish table
- cart summary layout

## Recommended Student Learning Order

Implement the project in this order:

1. Understand the file structure
2. Convert static UI into reusable data-driven UI
3. Add dish data source
4. Show all dishes dynamically
5. Add single dish page logic
6. Add create dish logic
7. Add update dish logic
8. Add delete dish logic
9. Add cart logic
10. Persist data using local storage or backend

## Step 1: Understand the File Structure

Important files:

- `src/App.jsx`
- `src/components/FoodCard.jsx`
- `src/components/DishForm.jsx`
- `src/components/DishTable.jsx`
- `src/components/CartSummary.jsx`
- `src/pages/DishesPage.jsx`
- `src/pages/DishDetailsPage.jsx`
- `src/pages/AddDishPage.jsx`
- `src/pages/AdminManagePage.jsx`
- `src/pages/CartPage.jsx`
- `src/styles/global.css`

What students should notice:

- components are presentational
- forms have no submit logic
- buttons have no handlers
- dish data is not stored in state
- cart totals are static
- no routing is implemented

## Step 2: Create the Main Dish Data

Students should create a dish data source.

Possible approaches:

- use `useState` in `App.jsx`
- use React Context
- use Redux if learning advanced state management
- connect to backend API later

Each dish object can contain:

- `id`
- `name`
- `category`
- `price`
- `image`
- `description`
- `preparationTime`
- `availability`

Example structure idea:

```js
{
  id: 1,
  name: "Truffle Pasta",
  category: "Italian",
  price: 18,
  image: "image-url",
  description: "Creamy pasta",
  preparationTime: "20 mins",
  availability: "Available"
}
```

Students should create this themselves in code.

## Step 3: Show All Dishes Dynamically

File to update:

- `src/pages/DishesPage.jsx`

Current state:

- cards are hardcoded

Student task:

- pass dish data as props
- use `.map()` to render one `FoodCard` for each dish
- send each card the correct values

Skills practiced:

- array mapping
- props
- reusable components

## Step 4: Build Single Dish Page Logic

File to update:

- `src/pages/DishDetailsPage.jsx`

Current state:

- values are static

Student task:

- identify which dish should be shown
- display that dish dynamically
- later connect this page to route parameters

Recommended learning path:

1. First pass the selected dish as a prop
2. Then learn `react-router-dom`
3. Then use route params like `/dish/:id`
4. Find the matching dish by id

Skills practiced:

- props
- route params
- searching inside arrays
- dynamic rendering

## Step 5: Add New Dish Logic

Files to update:

- `src/components/DishForm.jsx`
- `src/pages/AddDishPage.jsx`
- maybe `src/App.jsx`

Current state:

- form exists
- submit button does nothing

Student task:

- connect all form inputs to state
- capture input values
- validate required fields
- create a new dish object
- add the new dish into the dishes array
- clear the form after successful submit

Suggested concepts:

- controlled components
- `useState`
- form submission
- `preventDefault()`

Validation ideas:

- dish name should not be empty
- price should be a valid number
- description should not be too short
- category should not be empty

## Step 6: Add Update Dish Logic

Files to update:

- `src/pages/AdminManagePage.jsx`
- `src/components/DishForm.jsx`
- `src/components/DishTable.jsx`

Current state:

- edit button exists
- update form exists
- nothing is connected

Student task:

- click an edit button
- load the selected dish into the update form
- allow changes in inputs
- save updated values into the dishes array

Recommended process:

1. store the selected dish in state
2. pass that selected dish to the update form
3. prefill form fields
4. submit updated values
5. replace the old dish in the array

Skills practiced:

- lifting state up
- passing callback functions
- updating arrays immutably

## Step 7: Add Delete Dish Logic

Files to update:

- `src/components/DishTable.jsx`
- `src/pages/AdminManagePage.jsx`

Current state:

- delete button exists
- no delete behavior

Student task:

- attach a delete handler to each dish row
- remove the selected dish from the array
- optionally ask for confirmation before deleting

Common approach:

- use `.filter()` to create a new array without the deleted dish

Skills practiced:

- event handling
- array filtering
- immutable updates

## Step 8: Add Cart Logic

Files to update:

- `src/components/FoodCard.jsx`
- `src/pages/DishDetailsPage.jsx`
- `src/pages/CartPage.jsx`
- `src/components/CartSummary.jsx`
- maybe `src/App.jsx`

Current state:

- add to cart buttons exist
- cart values are static

Student task:

- create cart state
- add item to cart from card or details page
- prevent duplicate issues or handle quantity increase
- update item quantity
- remove item from cart
- calculate subtotal
- calculate total

Recommended cart item shape:

- `id`
- `name`
- `price`
- `quantity`

Cart concepts students should decide:

- if same item is added again, should quantity increase?
- should out of stock items be blocked?
- should cart be saved in local storage?

Skills practiced:

- derived values
- state updates
- array methods
- lifting shared state

## Step 9: Add Routing

The current app shows all sections in one scrollable preview.

Students should convert it into multiple pages.

Recommended pages:

- `/`
- `/dishes`
- `/dish/:id`
- `/admin/add`
- `/admin/manage`
- `/cart`

Suggested library:

- `react-router-dom`

Student tasks:

- install routing package
- wrap app with router
- create routes
- connect navigation links
- move each page to its own route

## Step 10: Choose Data Persistence

Students can keep data in one of these ways:

- temporary React state
- local storage
- backend API

### Option A: React State Only

Best for beginners.

Pros:

- easy to understand
- fast to implement

Cons:

- refresh will lose data

### Option B: Local Storage

Good for intermediate students.

Pros:

- data stays after refresh
- no backend required

Cons:

- manual syncing needed

### Option C: Backend API

Best for full-stack practice.

Possible backend features:

- get all dishes
- get one dish
- create dish
- update dish
- delete dish
- maybe save orders later

## Suggested Component Responsibilities

### `App.jsx`

Can manage:

- dishes state
- selected dish state
- cart state
- routes later

### `FoodCard.jsx`

Can display:

- dish info
- view details button
- add to cart button

Should not own global cart state directly.

### `DishForm.jsx`

Can be reused for:

- add dish form
- update dish form

Students may improve it by passing:

- initial values
- submit handler
- button text
- validation errors

### `DishTable.jsx`

Can show:

- all dishes in admin panel
- edit button
- delete button

### `CartSummary.jsx`

Can display:

- cart items
- quantity
- subtotal
- total

## Teacher Notes

This starter is helpful for assignments where students must practice logic without spending too much time on design.

You can ask students to submit in phases:

1. Dynamic dish listing
2. Add dish form functionality
3. Edit and delete functionality
4. Cart functionality
5. Routing
6. Local storage or backend integration

## Optional Student Challenges

- add search by dish name
- add category filtering
- add sort by price
- add image preview before submit
- add empty state UI when there are no dishes
- add form error messages
- add loading states for API version
- add admin-only route protection
- add order summary page

## Final Reminder For Students

This project is intentionally incomplete.

The UI is already provided.
The logic must be implemented by students.

Main things still missing:

- dish state
- add logic
- update logic
- delete logic
- cart logic
- totals calculation
- routing
- persistence
