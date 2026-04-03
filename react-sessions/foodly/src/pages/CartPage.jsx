import { CartSummary } from '../components/CartSummary';
import { SectionHeading } from '../components/SectionHeading';

export function CartPage() {
  return (
    <section id="cart" className="page-section">
      <SectionHeading
        eyebrow="Cart Page"
        title="Starter UI for cart items and totals"
        description="Students should add quantity updates, remove actions, totals, and checkout preparation logic."
      />

      <CartSummary />
    </section>
  );
}
