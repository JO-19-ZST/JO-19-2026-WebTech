function Technology({ name, category, hours, onSelect }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>

      <button onClick={() => onSelect(name)}>
        Pokaż informacje
      </button>
    </section>
  );
}

export default Technology;