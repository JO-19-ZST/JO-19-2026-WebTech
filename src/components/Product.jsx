function Product({ name, price, onSelect }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>Cena: {price}</p>

      <button onClick={() => onSelect(name)}>
        Pokaż produkt
      </button>
    </section>
  );
}

export default Product;