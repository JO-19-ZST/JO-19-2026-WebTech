import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Navigation from "./components/Navigation.jsx";
import CourseCard from "./components/CourseCard.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Book from "./components/Book.jsx";

function App() {

  const cars = [
    {id: 1, brand: "Toyota", model: "Corolla"},
    {id: 2, brand: "Honda", model: "Civic"},
    {id: 3, brand: "BMW", model: "X5"}
  ]

  const technologies = [
    {id: 1, name: "React", category: "Frontend + Backend", hours: 20},
    {id: 2, name: "Node.js", category: "Backend", hours: 30},
    {id: 3, name: "MySQL", category: "Baza danych", hours: 50},
    {id: 4, name: "Express", category: "Backend", hours: 25},
    {id: 5, name: "MongoDB", category: "Baza danych", hours: 20}
  ];

  const students = [
    {id: 1, name: "Anna", className: "4P", age: 17, specialization: "technik programista"},
    {id: 2, name: "Jan", className: "4I", age: 18, specialization: "technik informatyk"},
    {id: 3, name: "Adam", className: "4A", age: 16, specialization: "technik analityk"}
  ];

  const books = [
    {id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski"},
    {id: 2, title: "Hobbit", author: "J.R.R. Tolkien"},
    {id: 3, title: "Lalka", author: "Bolesław Prus"}
  ]

  return (
    <>
      {cars.map(car => (
        <div key={car.id}>
          <h3>{car.id}</h3>
          <p>Brand: {car.brand}</p>
          <p>Model: {car.model}</p>
        </div>
      ))}
      <br />
      {technologies.map((technology) => (
        <Technology key={technology.id}
          name={technology.name}
          category={technology.category}
          hours={technology.hours}
        />
      ))}
      <br />
      {students.map((student) => (
        <Student key={student.id}
          name={student.name}
          className={student.className}
          age={student.age}
          specialization={student.specialization}
        />
      ))}
      <br />
      {books.map((book) => (
        <Book key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <br />
      {books.map((book) => {return(
        <Book key={book.id}
          title={book.title}
          author={book.author}
        />
      )})}
    </>
  );
}

export default App;