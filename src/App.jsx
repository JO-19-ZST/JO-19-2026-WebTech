import TechnologyImages from "./components/TechnologyImages.jsx";
import "./App.css";
import { useState } from "react";

function App() {

  const [selectedCategory, setSelectedCategory] = useState("Wszystko");

  const technologies = [
    { id: 1, name: "React", category: "Frontend", hours: 30, image: "react.webp" },
    { id: 2, name: "Node.js", category: "Backend", hours: 40, image: "nodejs.webp" },
    { id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "mysql.webp" },
    { id: 4, name: "Express", category: "Backend", hours: 25, image: "express.webp" },
    { id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "mongodb.webp" },
    { id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "bootstrap.webp" },
    { id: 7, name: "CSS", category: "Frontend", hours: 20, image: "css.webp" },
    { id: 8, name: "HTML", category: "Frontend", hours: 10, image: "html.webp" },
    { id: 9, name: "PHP", category: "Backend", hours: 35, image: "php.webp" }
  ].filter((technology) => technology.category === selectedCategory || selectedCategory === "Wszystko");

  return (
    <>
      <button className={selectedCategory === "Wszystko" ? "active" : ""} aria-pressed={selectedCategory === "Wszystko"} onClick={() => setSelectedCategory("Wszystko")}>Wszystko</button>
      <button className={selectedCategory === "Frontend" ? "active" : ""} aria-pressed={selectedCategory === "Frontend"} onClick={() => setSelectedCategory("Frontend")}>Frontend</button>
      <button className={selectedCategory === "Backend" ? "active" : ""} aria-pressed={selectedCategory === "Backend"} onClick={() => setSelectedCategory("Backend")}>Backend</button>
      <button className={selectedCategory === "Baza danych" ? "active" : ""} aria-pressed={selectedCategory === "Baza danych"} onClick={() => setSelectedCategory("Baza danych")}>Baza danych</button>
      <p>Wybrana kategoria: {selectedCategory}</p>
      <p>Ilość technologii: {technologies.length}</p>
      {technologies.map((technology) => (
        <TechnologyImages key={technology.id}
          name={technology.name}
          category={technology.category}
          hours={technology.hours}
          image={technology.image}
        />
      ))}
    </>
  );
}

export default App;