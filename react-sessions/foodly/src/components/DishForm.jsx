import { useReducer } from "react";

const initialState = {
  name: "",
  category: "",
  price: 0,
  img: "",
  description: "",
  preparationTime: "",
  veg: "",
  availability: "",
};

const formReducer = (state, action) => {
  if (
    action.type === "name" ||
    action.type === "category" ||
    action.type === "price" ||
    action.type === "img" ||
    action.type === "description" ||
    action.type === "veg" ||
    action.type === "preparationTime" ||
    action.type === "availability"
  ) {
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

export function DishForm({ title, subtitle, submitLabel, onAdd }) {
  const [dish, dispatch] = useReducer(formReducer, initialState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const submitHandler = (e) => {
    console.log("adding");
    e.preventDefault();
    onAdd(dish);

    dispatch({ type: "RESET" });
  };

  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>

      <form className="dish-form" onSubmit={submitHandler}>
        <label>
          Dish Name
          <input
            onChange={changeHandler}
            value={dish.name}
            name="name"
            type="text"
            placeholder="Enter dish name"
          />
        </label>

        <label>
          Category
          <select
            onChange={changeHandler}
            value={dish.category}
            name="category"
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Main Course">Main Course</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
            <option value="Drink">Drink</option>
          </select>
        </label>

        <label>
          Price
          <input
            onChange={changeHandler}
            value={dish.price}
            name="price"
            type="number"
            placeholder="Enter price"
          />
        </label>

        <label>
          Image URL
          <input
            onChange={changeHandler}
            value={dish.img}
            name="img"
            type="text"
            placeholder="Paste image link"
          />
        </label>

        <label className="full-width">
          Description
          <textarea
            rows="5"
            onChange={changeHandler}
            value={dish.description}
            name="description"
            placeholder="Write a short dish description"
          ></textarea>
        </label>

        <label>
          Preparation Time
          <input
            onChange={changeHandler}
            value={dish.preparationTime}
            name="preparationTime"
            type="text"
            placeholder="20 mins"
          />
        </label>

        <label>
          Dish Type
          <select onChange={changeHandler} value={dish.veg} name="veg">
            <option value="" disabled>
              Select dish type
            </option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
          </select>
        </label>

        <label>
          Availability
          <select
            onChange={changeHandler}
            value={dish.availability}
            name="availability"
          >
            <option value="" disabled>
              Select availability
            </option>
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </label>

        <div className="form-actions full-width">
          <button type="submit">{submitLabel}</button>
          <button
            type="reset"
            className="secondary-button"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Clear Form
          </button>
        </div>
      </form>
    </section>
  );
}
