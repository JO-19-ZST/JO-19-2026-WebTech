import "./App.css";
import { useState } from "react";

function App() {

  const [generatePassword, setGeneratePassword] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [inputs, setInputs] = useState({
    address: "",
    login: "",
    password: ""
  });
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  
function generujHaslo() {
    const male = "abcdefghijklmnopqrstuvwxyz";
    const duze = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const polskie = "ąęłńóśżźĄĘŁŃÓŚŻŹ";
    const cyfry = "0123456789";
    const specjalne = "!@#$%^&*()_+";

    let znaki = [];

    function losuj(zbior, ile) {
        for (let i = 0; i < ile; i++) {
            let indeks = Math.floor(Math.random() * zbior.length);
            znaki.push(zbior[indeks]);
        }
    }

    losuj(male, 3);
    losuj(duze, 3);
    losuj(polskie, 2);
    losuj(cyfry, 2);
    losuj(specjalne, 2);

    for (let i = znaki.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let temp = znaki[i];
        znaki[i] = znaki[j];
        znaki[j] = temp;
    }

    setGeneratedPassword(znaki.join(""));
  }

  return (
    <>
      <section>
        <h1>Menedżer haseł - wykonał Jakub Osuch</h1>
        <form action={(formData) => {
          setInputs({
            address: formData.get("address"),
            login: formData.get("login"),
            password: password
          });setGeneratePassword(true)}}>
          <div className="m-3">
            <label htmlFor="address" className="text-label">Adres WWW:</label>
            <input id="address" name="address" type="text" className="form-control" placeholder="Adres strony WWW"/>
          </div>
          <div className="m-3">
            <label htmlFor="login" className="text-label">Login:</label>
            <input id="login" name="login" type="text" className="form-control" placeholder="Twój login"/>
          </div>
          <div className="m-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wygeneruj" checked={generatePassword} onChange={(e) => setGeneratePassword(e.target.checked)}/>
              <label htmlFor="wygeneruj" className="form-check-label">Wygeneruj hasło</label>
            </div>
            <label htmlFor="password" className="text-label">Hasło:</label>
            <input id="password" name="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" disabled={generatePassword}/>
            <button type="button" className={showPassword ? "btn btn-dark m-2" : "btn btn-light m-2"} onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Ukryj hasło" : "Pokaż hasło"}</button>
            {generatePassword && <button type="button" className="btn btn-info m-2" onClick={generujHaslo} disabled={!generatePassword}>Generuj hasło</button>}
            {generatePassword && <button type="button" className="btn btn-success m-2" onClick={() => {setPassword(generatedPassword);setGeneratedPassword("")}} disabled={generatedPassword === ""}>Zastosuj hasło</button>}
            {generatePassword && <p className="m-2 lead">Podgląd wygenerowanego hasła: {generatedPassword}</p>}
          </div>
          <button className="btn btn-primary mt-3" type="submit">Zapisz</button>
        </form>
      </section>
      <section>
        <p className="p-2 text-primary lead">Adres: {inputs.address}</p>
        <p className="p-2">Login: {inputs.login}</p>
        <p className="p-2">Hasło: {inputs.password}</p>
      </section>
    </>
  );
}

export default App;
