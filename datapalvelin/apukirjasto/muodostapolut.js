import path from "node:path";

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

  const { kansio, asetustiedosto, varastotiedosto, kuvakansio } =
    varastoasetukset.varasto;
  const varastokansioPolku = path.join(JUURI, config.varastot.kansio, kansio);

  const polut = {
    juuripolku: JUURI,

    varastokirjastoKansio,
    tietovarastokerrosPolku,
    varastokerrosPolku,
    datasovitinPolku,
    lukijakirjoittajaPolku,
    minePolku,

    varastokansioPolku,
    varastoasetuksetPolku: path.join(varastokansioPolku, asetustiedosto),
    varastotiedostoPolku: path.join(varastokansioPolku, varastotiedosto),
    kuvakansio,
  };

  polut.kuvakansioPolku = kuvakansio
    ? path.join(varastokansioPolku, kuvakansio)
    : "";

  //auttakaa mua
  const avaimet = Object.keys(varastoasetukset.varasto);

  if (
    avaimet.includes("muunnin") &&
    varastoasetukset.varasto.muunnin &&
    varastoasetukset.varasto.muunnin.length > 0
  ) {
    polut.datasovitinPolku = path.join(
      varastokansioPolku,
      varastoasetukset.varasto.muunnin
    );
  }

  return polut;
}

export { muodostaPolut };
