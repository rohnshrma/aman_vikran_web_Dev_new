export function FoodCard({
  name,
  category,
  price,
  description,
  badge = 'Popular',
}) {
  return (
    <article className="food-card">
      <div className="food-card-image" aria-hidden="true">
        <span>{category}</span>
      </div>

      <div className="food-card-body">
        <div className="food-card-topline">
          <span className="badge">{badge}</span>
          <strong>{price}</strong>
        </div>

        <h3>{name}</h3>
        <p>{description}</p>

        <div className="food-card-actions">
          <button type="button">View Details</button>
          <button type="button" className="secondary-button">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
