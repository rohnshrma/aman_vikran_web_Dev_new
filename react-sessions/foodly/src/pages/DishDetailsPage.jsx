import { SectionHeading } from "../components/SectionHeading";

import { useParams } from "react-router-dom";

export function DishDetailsPage(dishes) {
  const { id } = useParams();

  console.log("id =>", id);

  const dish = dishes.find((d) => d.id === Number(id));

  if (!dish) {
    return <h2>Dish Not Found</h2>;
  }

  return (
    <section id="dish-details" className="page-section">
      <SectionHeading
        eyebrow="Single Dish Page"
        title={dish.name}
        description={dish.description}
      />

      <div className="details-layout">
        <div className="details-image" aria-hidden="true">
          <span>{dish.category}</span>
        </div>

        <div className="panel details-panel">
          <span className="badge">Top Rated</span>
          <h3>{dish.name}</h3>
          <p className="details-copy">{dish.description}</p>

          <div className="details-meta">
            <div>
              <span>Category</span>
              <strong>{dish.category}</strong>
            </div>
            <div>
              <span>Type</span>
              <strong>{dish.veg ? "Veg" : "Non-Veg"}</strong>
            </div>
            <div>
              <span>Price</span>
              <strong>₹ {dish.price}</strong>
            </div>
            <div>
              <span>Preparation</span>
              <strong>{dish.preparationTime}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>{dish.availability}</strong>
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
