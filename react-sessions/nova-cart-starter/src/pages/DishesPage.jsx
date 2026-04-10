import { FoodCard } from "../components/FoodCard";
import { SectionHeading } from "../components/SectionHeading";

export function DishesPage(props) {
  const { dishes } = props;

  return (
    <section id="products" className="page-section">
      <SectionHeading
        eyebrow="Storefront"
        title="Minimal product gallery for an e-commerce classroom project"
        description="Use these cards as the visual starter for listing products, filtering by category, and connecting add-to-cart behavior later."
      />

      <div className="card-grid">
        {dishes.map((product) => (
          <FoodCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            brand={product.brand}
            availability={product.availability}
            price={product.price}
            description={product.description}
            badge={product.badge}
          />
        ))}
      </div>
    </section>
  );
}
