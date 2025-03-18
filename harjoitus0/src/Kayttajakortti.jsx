import * as React from "react";
const Hello = ({ name }) => {
  return <p>Terve {name}!;</p>;
};

const Infolista = ({ taulukko }) => {
  return (
    <ul>
      {taulukko.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const Kayttajakortti = ({ nimi, lista }) => {
  return (
    <div>
      <Hello name="Daren" />
      <Infolista taulukko={lista} />
    </div>
  );
};

export default Kayttajakortti;
