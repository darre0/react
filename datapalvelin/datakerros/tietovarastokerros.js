class Tietovarasto {
  #varastokerros;

  constructor(KIRJASTOT) {
    const { Varastokerros } = KIRJASTOT.varastokerros;
    this.#varastokerros = new Varastokerros(KIRJASTOT);
  }

  get tuetutKuvatyypit() {
    return this.#varastokerros.tuetutKuvatyypit;
  }

  get perusavain() {
    return this.#varastokerros.perusavain;
  }

  get hakuavaimet() {
    return this.#varastokerros.hakuavaimet;
  }

  get resurssi() {
    return this.#varastokerros.resurssi;
  }

  get numeeriset() {
    return this.#varastokerros.numeeriset;
  }

  get kuvakansio() {
    return this.#varastokerros.kuvakansio;
  }

  async haeKaikki() {
    return this.#varastokerros.haeKaikki();
  }

  async hae(avain, arvo) {
    return this.#varastokerros.hae(avain, arvo);
  }

  async haeArvot(avain, vainKertaalleen = false) {
    return this.#varastokerros.haeArvot(avain, vainKertaalleen);
  }

  async haeAvaimet() {
    return this.#varastokerros.haeAvaimet();
  }

  async haeKuva(kuvatiedostoNimi) {
    return this.#varastokerros.haeKuva(kuvatiedostoNimi);
  }

  async haeKuvalista() {
    return this.#varastokerros.haeKuvalista();
  }
}

export { Tietovarasto };
