import { CartSummary } from "../components/CartSummary";
import { SectionHeading } from "../components/SectionHeading";

export function CartPage({ items }) {
  return (
    <section id="cart" className="page-section">
      <SectionHeading
        eyebrow="Cart"
        title="Starter UI for cart items, quantity summary, and checkout totals"
        description="Students can implement quantity updates, remove actions, total calculations, promo logic, and checkout preparation."
      />

      <CartSummary items={items} />
    </section>
  );
}
