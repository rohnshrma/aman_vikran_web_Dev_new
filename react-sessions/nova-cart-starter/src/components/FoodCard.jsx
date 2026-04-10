import { useNavigate } from "react-router-dom";

export function FoodCard({
  id,
  name,
  category,
  brand,
  availability,
  price,
  description,
  badge = "New Arrival",
}) {
  const navigate = useNavigate();
  const statusClass =
    availability === "In Stock" ? "status-available" : "status-unavailable";

  return (
    <article className="food-card">
      <div className="food-card-image" aria-hidden="true">
        <span>{category}</span>
      </div>

      <div className="food-card-body">
        <div className="food-card-topline">
          <span className="badge">{badge}</span>
          <strong>${price}</strong>
        </div>

        <h3>{name}</h3>
        <div className="food-card-tags">
          <span className="panel-tag">{brand}</span>
          <span className={`panel-tag ${statusClass}`}>{availability}</span>
        </div>
        <p>{description}</p>

        <div className="food-card-actions">
          <button type="button" onClick={() => navigate(`/product/${id}`)}>
            View Product
          </button>
          <button type="button" className="secondary-button">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
