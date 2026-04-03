export function DishTable() {
  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>Existing Dishes</h3>
          <p>Students should later connect this table to state or API data.</p>
        </div>
        <span className="panel-tag">Admin</span>
      </div>

      <div className="table-wrap">
        <table className="dish-table">
          <thead>
            <tr>
              <th>Dish</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Truffle Pasta</td>
              <td>Main Course</td>
              <td>$18</td>
              <td>Available</td>
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
            <tr>
              <td>Garden Bowl</td>
              <td>Healthy</td>
              <td>$12</td>
              <td>Available</td>
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
            <tr>
              <td>Berry Cheesecake</td>
              <td>Dessert</td>
              <td>$9</td>
              <td>Low Stock</td>
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
          </tbody>
        </table>
      </div>
    </section>
  );
}
