import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

   const showResult = async () => {

     const arg1 = document.getElementById("k1").value;
     const arg2 = document.getElementById("z1").value;


     const formNotEmpty = !(arg1 === "" || arg2 === "");
     if (formNotEmpty)
     {
         const request = "/api/" + arg1 + '/' + arg2;

         const result = await axios.get(request);

         ReactDOM.render(<p id={"wynik2"}></p>, document.getElementById("wynik"));
         document.getElementById("wynik2").innerHTML = "Twoj wskaznik ROE: " + result.data;
     }
     else
         {
             alert("Proszę uzupełnić wszystkie pola.");
         }

   };

  return (
    <div className="App">
      <header className="App-header">
          <h1>Kalkulator wskaźnika rentowności ROE</h1>

          <div>
              <img src={logo} className="App-logo" alt="logo" />
              <img src={logo} className="App-logo" alt="logo" />
              <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p id={"info"}>
          Wpisz wartości i naciśnij przycisk "Oblicz"
        </p>
          <form>
              <label>
                  <input id="k1" type="text" name="k" placeholder={"Kapitał zainwestowany"} />
              </label>
              <br />
              <label>
                  <input id="z1" type="text" name="z" placeholder={"Zysk netto"}/>
              </label>
              <br />
              <br />
          </form>
          <button onClick={showResult}>Oblicz</button>
          <div id={"wynik"}></div>
        </header>
        <footer className={"App-footer"}>
            © Maciej Boniaszczuk
        </footer>
    </div>
  );
}

export default App;
