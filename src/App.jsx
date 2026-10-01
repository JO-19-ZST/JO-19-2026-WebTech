import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Navigation from "./components/Navigation.jsx";
import CourseCard from "./components/CourseCard.jsx";
import StudentCard from "./components/StudentCard.jsx";

function App() {

  const cars = [
    {id: 1, brand: "Toyota", model: "Corolla"},
    {id: 2, brand: "Honda", model: "Civic"},
    {id: 3, brand: "BMW", model: "X5"}
  ]

  const technologies = [
    {id: 1, name: "React", hours: 20},
    {id: 2, name: "Node.js", hours: 30},
    {id: 3, name: "MySQL", hours: 50}
  ];

  const students = [
  {id: 1, name: "Anna", className: "4P", age: 17, specialization: "technik programista"},
  {id: 2, name: "Jan", className: "4I", age: 18, specialization: "technik informatyk"},
  {id: 3, name: "Adam", className: "4A", age: 16, specialization: "technik analityk"}
];

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
    </>
  );
}

export default App;