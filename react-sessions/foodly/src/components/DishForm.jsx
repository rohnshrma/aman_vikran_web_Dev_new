export function DishForm({ title, subtitle, submitLabel }) {
  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="panel-tag">UI Only</span>
      </div>

      <form className="dish-form">
        <label>
          Dish Name
          <input type="text" placeholder="Enter dish name" />
        </label>

        <label>
          Category
          <input type="text" placeholder="Pizza, Dessert, Drinks..." />
        </label>

        <label>
          Price
          <input type="text" placeholder="Enter price" />
        </label>

        <label>
          Image URL
          <input type="text" placeholder="Paste image link" />
        </label>

        <label className="full-width">
          Description
          <textarea
            rows="5"
            placeholder="Write a short dish description"
          ></textarea>
        </label>

        <label>
          Preparation Time
          <input type="text" placeholder="20 mins" />
        </label>

        <label>
          Availability
          <select defaultValue="">
            <option value="" disabled>
              Select availability
            </option>
            <option>Available</option>
            <option>Out of Stock</option>
          </select>
        </label>

        <div className="form-actions full-width">
          <button type="button">{submitLabel}</button>
          <button type="reset" className="secondary-button">
            Clear Form
          </button>
        </div>
      </form>
    </section>
  );
}
