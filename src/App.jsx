import TechnologyImages from "./components/TechnologyImages.jsx";
import "./App.css";
import { useState } from "react";

function App() {

  const [selectedCategories, setSelectedCategories] = useState({
    Frontend: true,
    Backend: true,
    "Baza danych": true
  });

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
  ];

  const filteredTechnologies = technologies.filter((technology) => {
    return selectedCategories[technology.category];
  });

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap gap-4 my-4">
        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="frontend"
            checked={selectedCategories.Frontend}
            onChange={(event) => setSelectedCategories({
              ...selectedCategories,
              Frontend: event.target.checked
            })}
          />
          <label className="form-check-label" htmlFor="frontend">Frontend</label>
        </div>

        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="backend"
            checked={selectedCategories.Backend}
            onChange={(event) => setSelectedCategories({
              ...selectedCategories,
              Backend: event.target.checked
            })}
          />
          <label className="form-check-label" htmlFor="backend">Backend</label>
        </div>

        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="baza-danych"
            checked={selectedCategories["Baza danych"]}
            onChange={(event) => setSelectedCategories({
              ...selectedCategories,
              "Baza danych": event.target.checked
            })}
          />
          <label className="form-check-label" htmlFor="baza-danych">Baza danych</label>
        </div>
      </div>

      <button onClick={() => setSelectedCategories({
        Frontend: true,
        Backend: true,
        "Baza danych": true
      })}>
        Pokaż wszystko
      </button>

      <p className="alert alert-info">
        Wybrane technologie: {
          [
            selectedCategories.Frontend ? "Frontend" : "",
            selectedCategories.Backend ? "Backend" : "",
            selectedCategories["Baza danych"] ? "Baza danych" : ""
          ].filter(Boolean).join(", ")
        }
      </p>
      <p className="alert alert-warning">Ilość technologii: {filteredTechnologies.length}</p>

      {filteredTechnologies.map((technology) => (
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
