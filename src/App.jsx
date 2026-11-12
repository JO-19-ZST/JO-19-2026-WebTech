import "./App.css";
import { useState } from "react";

function App() {

  let [generatePassword, setGeneratePassword] = useState(true);
  let [address, setAddress] = useState("");
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
      <section>
        <h1>Menedżer haseł - wykonał Jakub Osuch</h1>
        <div className="m-3">
          <label htmlFor="adres" className="text-label">Adres WWW:</label>
          <input id="adres" type="text" className="form-control" placeholder="Adres strony WWW"/>
        </div>
        <div className="m-3">
          <label htmlFor="login" className="text-label">Login:</label>
          <input id="login" type="text" className="form-control" placeholder="Twój login"/>
        </div>
        <div className="m-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wygeneruj" checked={generatePassword} onChange={(e) => {setGeneratePassword(e.target.checked);setPassword("")}}/>
            <label htmlFor="wygeneruj" className="form-check-label">Wygeneruj hasło</label>
          </div>
          <label htmlFor="haslo" className="text-label">Hasło:</label>
          <input id="haslo" type="password" className="form-control" disabled={generatePassword}/>
        </div>
        <button className="btn btn-primary mt-3" onClick={() => {setAddress(document.getElementById("adres").value);setLogin(document.getElementById("login").value);setPassword(document.getElementById("haslo").value)}}>Zapisz</button>
      </section>
      <section>
        <p className="p-2 text-primary lead">Adres: {address}</p>
        <p className="p-2">Login: {login}</p>
        <p className="p-2">{generatePassword ? "Hasło automatycznie generowane" : "Hasło: " + password}</p>
      </section>
    </>
  );
}

export default App;
