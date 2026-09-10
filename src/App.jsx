import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Jakub Osuch",
    technologiesCount: 3
  };

  const technology = {
    name: "React",
    category: "Frontend",
    hours: 30,
    active: true
  };

  const course = {
    name: "Zaawansowane Aplikacje Webowe",
    teacher: "Rafał Taraszka",
    hours: 4,
    completed: true
  };

  return (
    <>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>Liczba technologii: {app.technologiesCount}</p>
      <br />
      <p>{technology.name}</p>

      <p>Kategoria: {technology.category}</p>

      <p>Liczba godzin: {technology.hours}</p>
      <br />
      <section>
        <h2 className="red">{course.name}</h2>

        <p>Nauczyciel: {course.teacher}</p>

        <p>Liczba godzin: {course.hours}</p>
      </section>
    </>
  );
}

export default App;