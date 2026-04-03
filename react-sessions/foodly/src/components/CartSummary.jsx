export function CartSummary() {
  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h3>Cart Preview</h3>
          <p>UI for cart items and total. Logic should be completed by students.</p>
        </div>
        <span className="panel-tag">User</span>
      </div>

      <div className="cart-list">
        <article className="cart-item">
          <div>
            <h4>Truffle Pasta</h4>
            <p>Quantity controls to be implemented</p>
          </div>
          <strong>$18</strong>
        </article>

        <article className="cart-item">
          <div>
            <h4>Berry Cheesecake</h4>
            <p>Remove item logic to be implemented</p>
          </div>
          <strong>$9</strong>
        </article>
      </div>

      <div className="cart-footer">
        <div>
          <span>Subtotal</span>
          <strong>$27</strong>
        </div>
        <div>
          <span>Total</span>
          <strong>$27</strong>
        </div>
        <button type="button">Proceed to Checkout</button>
      </div>
    </section>
  );
}
