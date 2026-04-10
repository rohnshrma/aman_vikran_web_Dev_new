import { DishForm } from "../components/DishForm";
import { SectionHeading } from "../components/SectionHeading";

export function AddDishPage() {
  return (
    <section id="add-product" className="page-section">
      <SectionHeading
        eyebrow="Add Product"
        title="Admin-facing form for creating a new product"
        description="The layout and field structure are ready. Students should later connect form state, validation, submit handling, and storage."
      />

      <DishForm
        title="Create Product"
        subtitle="Use this starter form for adding a product to your catalog."
        submitLabel="Add Product"
      />
    </section>
  );
}
