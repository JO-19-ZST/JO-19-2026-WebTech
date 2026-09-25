import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Navigation from "./components/Navigation.jsx";
import CourseCard from "./components/CourseCard.jsx";
import StudentCard from "./components/StudentCard.jsx";

function App() {

  const studentOne = {
    id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    className: "4P",
    specialization: "technik programista",
    gradesAverage: 4.75,
    isActive: true
  };

  return (
    <>
      <Header />

      <Navigation />

      <main>

        <Technology />

        <Technology />

        <Technology />

        <Student />

        <StudentCard student={studentOne} />

        <InfoBox />

        <CourseCard />

      </main>

      <Footer />
    </>
  );
}

export default App;