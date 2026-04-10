const Hero = () => {
  return (
    <section className="hero-card">
      <div>
        <p className="eyebrow">E-Commerce Starter App</p>
        <h1>Minimal storefront UI with a cleaner, more modern color system.</h1>
        <p className="hero-copy">
          This starter kit focuses on page structure, layout, and styling. The
          business logic for product CRUD, cart state, filtering, and checkout
          should be added step by step by students.
        </p>

        <div className="hero-metrics">
          <article>
            <strong>4</strong>
            <span>core flows</span>
          </article>
          <article>
            <strong>UI only</strong>
            <span>logic left for practice</span>
          </article>
          <article>
            <strong>Beginner guide</strong>
            <span>included in instructions.md</span>
          </article>
        </div>
      </div>

      <div className="hero-note">
        <h2>Suggested Product Build Goals</h2>
        <ul>
          <li>Show all products in a storefront grid</li>
          <li>Build a product details page using route params</li>
          <li>Create add, edit, and delete product flows</li>
          <li>Implement cart quantity and total logic</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
