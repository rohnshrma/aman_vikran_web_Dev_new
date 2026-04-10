import { DishForm } from "../components/DishForm";
import { SectionHeading } from "../components/SectionHeading";

export function AddDishPage({ onAdd }) {
  return (
    <section id="add-dish" className="page-section">
      <SectionHeading
        eyebrow="Add New Dish"
        title="Admin-facing form for creating a new food item"
        description="Input fields are ready, but submit handling, validation, and storage should be built by students."
      />

      <DishForm
        onAdd={onAdd}
        title="Create Dish"
        subtitle="Use this layout for adding a new dish to the menu."
        submitLabel="Add Dish"
      />
    </section>
  );
}
