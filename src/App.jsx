import InfoBox from "./components/InfoBox.jsx";

function App() {

  const technologies = [
    {name: "React"},
    {name: "Node.js"},
    {name: "MySQL"}
  ];

  return (
    <>
      {technologies.map((technology, index) => (
        <InfoBox key={index}
          name={technology.name}
          index={index}
        />
      ))}
    </>
  );
}

export default App;