import * as React from "react";
import Hello from "./Hello.jsx";
import Opiskelija from "./OpiskelijaTiedot.jsx";
import Infolista from "./Infolista.jsx";
import Linkkilista from "./Linkkilista.jsx";
import Kayttajakortti from "./Kayttajakortti.jsx";

function App() {
  const opiskelija = {
    nimi: "Daren Haupt",
    ika: 17,
    kurssi: "Reactin perusteet",
  };
  const tiedot = ["React", "Javascript", "CSS"];
  const linkit = [
    { nimi: "Google", url: "https://google.com" },
    { nimi: "React", url: "https://react.dev" },
  ];
  return (
    <div>
      <Hello name="Daren" />
      <Opiskelija opiskelija={opiskelija} />
      <Infolista taulukko={tiedot} />
      <Linkkilista lista={linkit} />
      <Kayttajakortti nimi="Daren" lista={["React", "Javascript", "CSS"]} />
    </div>
  );
}

export default App;
