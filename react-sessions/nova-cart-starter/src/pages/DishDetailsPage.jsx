import { useParams } from "react-router-dom";

import { SectionHeading } from "../components/SectionHeading";

export function DishDetailsPage({ dishes }) {
  const { id } = useParams();
  const product = dishes.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <section className="page-section">
        <SectionHeading
          eyebrow="Product Page"
          title="Product not found"
          description="This screen is ready for students to connect route params and fallback states."
        />
      </section>
    );
  }

  return (
    <section id="product-details" className="page-section">
      <SectionHeading
        eyebrow="Single Product"
        title={product.name}
        description={product.description}
      />

      <div className="details-layout">
        <div className="details-image" aria-hidden="true">
          <span>{product.category}</span>
        </div>

        <div className="panel details-panel">
          <span className="badge">{product.badge}</span>
          <h3>{product.name}</h3>
          <p className="details-copy">{product.description}</p>

          <div className="details-meta">
            <div>
              <span>Brand</span>
              <strong>{product.brand}</strong>
            </div>
            <div>
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>
            <div>
              <span>Price</span>
              <strong>${product.price}</strong>
            </div>
            <div>
              <span>SKU</span>
              <strong>{product.sku}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>{product.availability}</strong>
            </div>
            <div>
              <span>Inventory</span>
              <strong>{product.inventory} units</strong>
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
