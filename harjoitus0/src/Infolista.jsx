import * as React from "react";

function Infolista(props) {
  return (
    <ul>
      <li>{props.taulukko[0]}</li>
      <li>{props.taulukko[1]}</li>
      <li>{props.taulukko[2]}</li>
    </ul>
  );
}

export default Infolista;
