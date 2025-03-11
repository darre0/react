import * as React from "react";
import Hello from "./Hello.jsx";
import Opiskelija from "./OpiskelijaTiedot.jsx";
import Infolista from "./Infolista.jsx";

function App() {
  const opiskelija = {
    nimi: "Daren Haupt",
    ika: 17,
    kurssi: "Reactin perusteet",
  };
  const tiedot = ["React", "Javascript", "CSS"];
  return (
    <div>
      <Hello name="Daren" />
      <Opiskelija opiskelija={opiskelija} />
      <Infolista taulukko={tiedot} />
    </div>
  );
}

export default App;
