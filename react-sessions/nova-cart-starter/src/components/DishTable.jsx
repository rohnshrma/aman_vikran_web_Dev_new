export function DishTable({ products = [] }) {
  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>Existing Products</h3>
          <p>
            This table is intentionally visual only. Students can later connect
            edit and delete actions to real state.
          </p>
        </div>
        <span className="panel-tag">Admin View</span>
      </div>

      <div className="table-wrap">
        <table className="dish-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <strong>{product.name}</strong>
                  <div className="table-subcopy">{product.sku}</div>
                </td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.availability}</td>
                <td>
                  <div className="row-actions">
                    <button type="button" className="secondary-button">
                      Edit
                    </button>
                    <button type="button" className="danger-button">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
