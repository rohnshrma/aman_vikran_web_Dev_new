const emptyValues = {
  name: "",
  category: "",
  price: "",
  image: "",
  description: "",
  brand: "",
  sku: "",
  availability: "",
  inventory: "",
};

export function DishForm({
  title,
  subtitle,
  submitLabel,
  initialValues = emptyValues,
}) {
  const values = { ...emptyValues, ...initialValues };

  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="panel-tag">UI Only</span>
      </div>

      <form
        className="dish-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <label>
          Product Name
          <input
            name="name"
            type="text"
            placeholder="Enter product name"
            defaultValue={values.name}
          />
        </label>

        <label>
          Category
          <select name="category" defaultValue={values.category || ""}>
            <option value="" disabled>
              Select category
            </option>
            <option value="Wearables">Wearables</option>
            <option value="Audio">Audio</option>
            <option value="Desk Setup">Desk Setup</option>
            <option value="Accessories">Accessories</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </label>

        <label>
          Price
          <input
            name="price"
            type="number"
            placeholder="Enter price"
            defaultValue={values.price}
          />
        </label>

        <label>
          Image URL
          <input
            name="image"
            type="text"
            placeholder="Paste product image link"
            defaultValue={values.image}
          />
        </label>

        <label className="full-width">
          Description
          <textarea
            rows="5"
            name="description"
            placeholder="Write a short product description"
            defaultValue={values.description}
          ></textarea>
        </label>

        <label>
          Brand
          <input
            name="brand"
            type="text"
            placeholder="Enter brand name"
            defaultValue={values.brand}
          />
        </label>

        <label>
          SKU
          <input
            name="sku"
            type="text"
            placeholder="Example: NOVA-001"
            defaultValue={values.sku}
          />
        </label>

        <label>
          Availability
          <select name="availability" defaultValue={values.availability || ""}>
            <option value="" disabled>
              Select availability
            </option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </label>

        <label>
          Inventory Count
          <input
            name="inventory"
            type="number"
            placeholder="Enter stock count"
            defaultValue={values.inventory}
          />
        </label>

        <div className="form-actions full-width">
          <button type="submit">{submitLabel}</button>
          <button type="reset" className="secondary-button">
            Clear Form
          </button>
        </div>
      </form>
    </section>
  );
}
