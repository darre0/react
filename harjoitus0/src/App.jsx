import * as React from "react";
import Hello from "./Hello.jsx";
import Opiskelija from "./OpiskelijaTiedot.jsx";

function App() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <Hello name="Ville" />
      <Opiskelija opiskelija={opiskelija} />
    </div>
  );
}

export default App;
