import { FoodCard } from "../components/FoodCard";
import { SectionHeading } from "../components/SectionHeading";

export function DishesPage(props) {
  const { dishes } = props;
  return (
    <section id="dishes" className="page-section">
      <SectionHeading
        eyebrow="All Dishes"
        title="Our Delicious Menu"
        description="A wide range of dishes from different cultures and cusines."
      />

      <div className="card-grid">
        {dishes.map((dishObj) => {
          return (
            <FoodCard
              name={dishObj.name}
              category={dishObj.category}
              price={`₹ ${dishObj.price}`}
              description={dishObj.description}
              badge="Chef Pick"
              key={dishObj.id}
            />
          );
        })}
      </div>
    </section>
  );
}
