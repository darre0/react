import path from "node.path";

const virheViesti = `
##################################################
Käyttö: node datapalvelin <varastoasetustiedosto>

Esimerkki: node datapalvelin jaatelovarasto
##################################################`;

async function lueKomentorivi() {
  return new Promise((resolve, reject) => {
    if (process.argv.length < 3) {
      reject(virheViesti);
    } else {
      let [, , asetustiedostonNimi] = process.argv;
      const tiedostotunniste = path.extname(asetustiedostonNimi).toLowerCase();
      if (tiedostotunniste === "") {
        asetustiedostonNimi += ".json";
      }
      resolve(asetustiedostonNimi);
    }
  });
}

export { lueKomentorivi };
