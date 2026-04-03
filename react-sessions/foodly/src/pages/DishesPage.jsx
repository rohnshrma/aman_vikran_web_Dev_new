import { FoodCard } from '../components/FoodCard';
import { SectionHeading } from '../components/SectionHeading';

export function DishesPage() {
  return (
    <section id="dishes" className="page-section">
      <SectionHeading
        eyebrow="All Dishes"
        title="Section for displaying all food items"
        description="Students can later replace these static cards with mapped data from state, local storage, or an API."
      />

      <div className="card-grid">
        <FoodCard
          name="Truffle Pasta"
          category="Italian"
          price="$18"
          description="Creamy handmade pasta with herbs and a clean premium finish."
          badge="Chef Pick"
        />
        <FoodCard
          name="Smoked Veg Burger"
          category="Burger"
          price="$14"
          description="Balanced, layered flavors with crisp lettuce and house sauce."
        />
        <FoodCard
          name="Berry Cheesecake"
          category="Dessert"
          price="$9"
          description="Soft texture, bright berry topping, and a light modern plating."
          badge="Sweet"
        />
      </div>
    </section>
  );
}
