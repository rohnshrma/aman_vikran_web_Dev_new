import { DishForm } from '../components/DishForm';
import { DishTable } from '../components/DishTable';
import { SectionHeading } from '../components/SectionHeading';

export function AdminManagePage() {
  return (
    <section id="admin" className="page-section">
      <SectionHeading
        eyebrow="Admin Management"
        title="Edit and delete dish management interface"
        description="Students can connect this section to CRUD operations for creating, updating, and deleting food items."
      />

      <div className="admin-grid">
        <DishForm
          title="Update Dish"
          subtitle="Use the same form layout for editing a selected dish."
          submitLabel="Update Dish"
        />
        <DishTable />
      </div>
    </section>
  );
}
