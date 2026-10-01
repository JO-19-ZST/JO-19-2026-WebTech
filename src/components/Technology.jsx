function Technology(props) {
  return (
    <section>
      <h2>{props.name}</h2>
      <p>Liczba godzin: {props.hours}</p>
    </section>
  );
}

export default Technology;