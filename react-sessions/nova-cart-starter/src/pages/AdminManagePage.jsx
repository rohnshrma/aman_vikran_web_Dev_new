import { DishForm } from "../components/DishForm";
import { DishTable } from "../components/DishTable";
import { SectionHeading } from "../components/SectionHeading";

export function AdminManagePage({ products = [] }) {
  const selectedProduct = products[0];

  return (
    <section id="admin" className="page-section">
      <SectionHeading
        eyebrow="Admin Management"
        title="Edit and delete product management interface"
        description="Students can connect this section to CRUD operations for selecting, updating, and deleting products."
      />

      <div className="admin-grid">
        <DishForm
          title="Update Product"
          subtitle="Use this same form layout to prefill a selected product before saving edits."
          submitLabel="Update Product"
          initialValues={selectedProduct}
        />
        <DishTable products={products} />
      </div>
    </section>
  );
}
