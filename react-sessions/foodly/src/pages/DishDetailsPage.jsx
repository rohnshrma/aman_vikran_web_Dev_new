import { SectionHeading } from '../components/SectionHeading';

export function DishDetailsPage() {
  return (
    <section id="dish-details" className="page-section">
      <SectionHeading
        eyebrow="Single Dish Page"
        title="Separate page design for one food item"
        description="Students should later connect this layout to route params and dynamic dish data."
      />

      <div className="details-layout">
        <div className="details-image" aria-hidden="true">
          <span>Dish Image</span>
        </div>

        <div className="panel details-panel">
          <span className="badge">Top Rated</span>
          <h3>Truffle Pasta</h3>
          <p className="details-copy">
            This layout is ready for one selected food item with its image,
            ingredients, pricing, rating, and add-to-cart action.
          </p>

          <div className="details-meta">
            <div>
              <span>Category</span>
              <strong>Italian</strong>
            </div>
            <div>
              <span>Price</span>
              <strong>$18</strong>
            </div>
            <div>
              <span>Preparation</span>
              <strong>20 mins</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>Available</strong>
            </div>
          </div>

          <div className="details-actions">
            <button type="button">Add to Cart</button>
            <button type="button" className="secondary-button">
              Save for Later
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
