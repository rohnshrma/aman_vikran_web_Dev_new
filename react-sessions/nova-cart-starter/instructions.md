# NovaCart Starter Kit Instructions

This project is a UI-only starter kit for beginners who want to practice building an e-commerce app in React.

The layout, CSS, and page structure are already prepared.
The actual product logic is intentionally left incomplete so you can build it yourself step by step.

## What You Will Build

By the end, your project can support:

- showing all products
- viewing a single product page
- adding a new product
- editing a product
- deleting a product
- adding products to cart
- updating cart quantity
- calculating totals
- saving data in local storage or a backend later

## Important Mindset

Do not try to build everything at once.

For beginners, the best approach is:

1. understand the data
2. make the UI dynamic
3. connect one feature at a time
4. test each step before moving ahead

If something feels confusing, slow down and build one small piece only.

## Project Files You Should Know First

Start by reading these files:

- `src/App.jsx`
- `src/data.js`
- `src/pages/DishesPage.jsx`
- `src/pages/DishDetailsPage.jsx`
- `src/pages/AddDishPage.jsx`
- `src/pages/AdminManagePage.jsx`
- `src/pages/CartPage.jsx`
- `src/components/FoodCard.jsx`
- `src/components/DishForm.jsx`
- `src/components/DishTable.jsx`
- `src/components/CartSummary.jsx`
- `src/styles/global.css`

## What Is Already Done For You

This starter kit already gives you:

- a homepage hero section
- a product listing layout
- a single product details layout
- an add product form layout
- an edit product form layout
- an admin table layout
- a cart page layout
- a modern minimalist color palette

## What Is Missing On Purpose

You still need to build:

- React state for products
- form handling
- add product logic
- edit product logic
- delete product logic
- cart state
- add to cart logic
- quantity update logic
- total calculation logic
- persistence logic

## Step 1: Understand the Product Object

Before writing logic, understand the shape of one product.

Look at `src/data.js`.

Each product has fields like:

- `id`
- `name`
- `description`
- `price`
- `category`
- `brand`
- `sku`
- `inventory`
- `badge`
- `availability`
- `image`

Why this matters:

- your UI depends on these keys
- if your key names do not match, your UI will show wrong or empty values

## Step 2: Move Product Data Into State

Right now the starter data is imported from `src/data.js`.

Your next goal is to keep products in React state.

Best place to start:

- `src/App.jsx`

What to do:

1. import `useState`
2. create a `products` state variable
3. use the starter data as the initial value
4. pass `products` to the pages that need it

Example idea:

```jsx
const [products, setProducts] = useState(starterProducts);
```

Why this step matters:

- you cannot add, edit, or delete products unless they live in state

## Step 3: Render the Product List Dynamically

Open `src/pages/DishesPage.jsx`.

This page should show one card for each product.

Check that you understand:

- where `dishes` or `products` come from
- how `.map()` works
- how props are passed to `FoodCard`

Your goal:

- make sure the page uses your real state from `App.jsx`
- do not hardcode product cards manually

What to learn here:

- array mapping
- props
- reusable components

## Step 4: Build the Single Product Page

Open `src/pages/DishDetailsPage.jsx`.

This page should display one selected product.

How it should work:

1. read the `id` from the URL
2. search the product array
3. find the matching product
4. render that product's details
5. show a fallback if the product is missing

Important idea:

- `useParams()` gives the route id
- `.find()` helps you search inside the products array

Practice goal:

```jsx
const product = products.find((item) => String(item.id) === id);
```

What to learn here:

- route params
- array searching
- conditional rendering

## Step 5: Build the Add Product Form Logic

Open:

- `src/components/DishForm.jsx`
- `src/pages/AddDishPage.jsx`
- `src/App.jsx`

The form UI already exists.
Your job is to make it actually collect and submit data.

### Part A: Create Form State

Use `useState` or `useReducer` inside the form component.

Store values for:

- name
- category
- price
- image
- description
- brand
- sku
- availability
- inventory

### Part B: Make Inputs Controlled

Each input should have:

- a `value`
- an `onChange`

This means React controls the form values.

### Part C: Submit the Form

When the user clicks submit:

1. prevent page refresh
2. create a new product object
3. generate an `id`
4. send the new product to the parent
5. update the products array
6. clear the form

### Part D: Validate Simple Rules

Start with beginner-friendly validation:

- name should not be empty
- price should be greater than 0
- category should not be empty
- sku should not be empty
- inventory should not be negative

You do not need advanced validation first.

Build small and simple.

## Step 6: Connect Add Product to App State

In `src/App.jsx`, create an `addProductHandler`.

Its job:

1. receive the new product
2. add it into the products array
3. keep the old products too

Beginner pattern:

```jsx
setProducts((prevProducts) => [...prevProducts, newProduct]);
```

Why this matters:

- it teaches immutable updates
- React re-renders when state changes

## Step 7: Build the Edit Product Flow

Open:

- `src/pages/AdminManagePage.jsx`
- `src/components/DishTable.jsx`
- `src/components/DishForm.jsx`

This is usually the hardest step for beginners, so go slowly.

### Goal

When the user clicks `Edit` on a row:

1. save that selected product in state
2. send it into the form
3. prefill the form
4. let the user change values
5. save the updated product back into the array

### Beginner Plan

#### 1. Create selected product state

In `AdminManagePage.jsx`, create something like:

```jsx
const [selectedProduct, setSelectedProduct] = useState(null);
```

#### 2. Send click handler to the table

Pass a function to `DishTable`.

That function should run when the user clicks `Edit`.

#### 3. Pass selected product to the form

If a product is selected, use its values as the form's initial values.

#### 4. Update the array

When the form is submitted in edit mode:

- loop through products
- replace the matching product
- keep all others unchanged

Beginner update pattern:

```jsx
setProducts((prevProducts) =>
  prevProducts.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  )
);
```

What to learn here:

- lifting state up
- passing handlers as props
- array `.map()` for updates

## Step 8: Build Delete Product Logic

Still inside the admin section, connect the `Delete` button.

When the user clicks delete:

1. identify the product id
2. remove that product from the array

Beginner delete pattern:

```jsx
setProducts((prevProducts) =>
  prevProducts.filter((product) => product.id !== idToDelete)
);
```

Nice beginner improvement:

- ask for confirmation before deleting

Example idea:

```jsx
const confirmed = window.confirm("Delete this product?");
```

## Step 9: Create Cart State

Now move to the cart feature.

Best place:

- `src/App.jsx`

Create a new state variable:

```jsx
const [cartItems, setCartItems] = useState([]);
```

Each cart item can look like:

```jsx
{
  id: "1",
  name: "Orbit Everyday Headphones",
  price: 129,
  quantity: 1
}
```

## Step 10: Add Products to Cart

You have `Add to Cart` buttons on product cards and the details page.

When clicked:

1. check whether the product is already in cart
2. if not, add it with quantity `1`
3. if yes, increase the quantity

This teaches an important React skill:

- updating nested state based on previous state

Helpful thinking:

- use `.find()` to check if the product already exists
- use `.map()` to update quantity
- use array spread to add a new item

## Step 11: Show Real Cart Data

Open:

- `src/pages/CartPage.jsx`
- `src/components/CartSummary.jsx`

Right now the cart is only preview data.

Your goal:

- pass real `cartItems` into the cart page
- render them with `.map()`
- show each item's quantity and subtotal

Per-item subtotal:

```jsx
item.price * item.quantity
```

## Step 12: Update Quantity

Add `+` and `-` buttons or quantity inputs in the cart UI.

When quantity changes:

1. find the matching cart item
2. update only that item's quantity
3. keep other cart items unchanged

Important beginner rule:

- never mutate the original object directly

Bad:

```jsx
item.quantity = item.quantity + 1;
```

Better:

```jsx
{
  ...item,
  quantity: item.quantity + 1
}
```

## Step 13: Remove Items From Cart

Add a remove button for each cart row.

Its logic is similar to delete product:

```jsx
setCartItems((prevCart) =>
  prevCart.filter((item) => item.id !== idToRemove)
);
```

## Step 14: Calculate Cart Totals

Use `.reduce()` to calculate totals.

Example direction:

```jsx
const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
```

Later you can also add:

- shipping
- discount
- tax
- grand total

## Step 15: Save Data in Local Storage

This step is optional at first, but useful.

You can save:

- products
- cart items

Beginner approach:

1. load data from local storage when the app starts
2. save data whenever state changes

Tools you will need:

- `useEffect`
- `localStorage.getItem()`
- `localStorage.setItem()`
- `JSON.parse()`
- `JSON.stringify()`

## Step 16: Small Beginner Checklist

Before moving on, check these one by one:

- can I display all products from state?
- can I open one product details page by id?
- can I add a product?
- can I edit a product?
- can I delete a product?
- can I add a product to cart?
- can I increase and decrease quantity?
- can I remove an item from cart?
- can I calculate totals correctly?

If one answer is no, fix that before adding more features.

## Common Beginner Mistakes

These happen to almost everyone:

- forgetting to pass props down
- using wrong property names
- mutating arrays directly
- mutating objects directly
- forgetting `preventDefault()` in forms
- not converting route ids properly
- not using `key` inside `.map()`
- trying to build add, edit, delete, and cart all at the same time

## Best Order to Practice

If you want the smoothest beginner path, follow this exact order:

1. move products into state
2. render product list from state
3. render single product page from route id
4. connect add product form
5. connect edit product flow
6. connect delete product
7. create cart state
8. connect add to cart
9. update quantity
10. calculate totals
11. save in local storage

## Final Advice

Do not aim for a perfect app on the first try.

Aim for this:

- one small feature
- working correctly
- understood clearly

If you build slowly and test each feature, this project becomes much easier.
