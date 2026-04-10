export function CartSummary({ items = [] }) {
  const subtotal = items.reduce(
    (runningTotal, item) => runningTotal + item.price * item.quantity,
    0,
  );

  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>Cart Preview</h3>
          <p>
            Starter layout for quantity controls, remove actions, totals, and
            checkout flow.
          </p>
        </div>
        <span className="panel-tag">User Flow</span>
      </div>

      <div className="cart-list">
        {items.map((item) => (
          <article className="cart-item" key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p>
                Qty: {item.quantity} · {item.note}
              </p>
            </div>
            <strong>${item.price * item.quantity}</strong>
          </article>
        ))}
      </div>

      <div className="cart-footer">
        <div>
          <span>Subtotal</span>
          <strong>${subtotal}</strong>
        </div>
        <div>
          <span>Total</span>
          <strong>${subtotal}</strong>
        </div>
        <button type="button">Proceed to Checkout</button>
      </div>
    </section>
  );
}
