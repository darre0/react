import pat from "node:path";

function muodostaPolut(JUURI, config, varastoasetukset) {
  //VARASTOKIRJASTOPOLUT
  const datakerrosKansio = path.join(JUURI, config.datakerros.kansio);
  const tietovarastokerrosPolku = path.join(
    datakerrosKansio,
    config.datakerros.tietovarastokerros
  );
  const varastokerrosPolku = path.join(
    datakerrosKansio,
    config.datakerros.varastokerros
  );

  const varastokirjastoKansio = path.join(JUURI, config.varastokirjasto.kansio);
  const datasovitinPolku = path.join(
    varastokirjastoKansio,
    config.varastokirjasto.datasovitin
  );
  const lukijakirjoittajaPolku = path.join(
    varastokirjastoKansio,
    config.varastokirjasto.lukijakirjoittaja
  );
  const mimePolku = path.join(
    varastokirjastoKansio,
    config.varastokirjasto.kuvatyypit
  );
}
