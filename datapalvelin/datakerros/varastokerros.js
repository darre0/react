import path from 'node:path';

class Varastokerros{
    #lukija
    #varastopolku
    #kuvakansioPolku
    #asetukset
    #MIMETYYPIT
    #kuvakansio

    constructor(KIRJASTOT){
        this.#asetukset=KIRJASTOT.varastoconfig;
        this.#MIMETYYPIT=KIRJASTOT.kuvatyypit;
        this.#varastopolku=KIRJASTOT.polut.varastotiedostoPolku;
        this.#kuvakansio=KIRJASTOT.polut.kuvakansio;
        this.#kuvakansioPolku=KIRJASTOT.polut.kuvakansioPolku;
        const { LukijaKirjoittaja } = KIRJASTOT.sovitin;
        const Muunnin = KIRJASTOT.sovitin;
        this.#lukija =
            new LukijaKirjoittaja(new Muunnin(this.#asetukset.numerokentät));
    }

    //getterit taad0
    get kuvakansio(){
        return this.#kuvakansio;
    }

    get tuetutKuvatyypit(){
        return Object.keys(this.#MIMETYYPIT);
    }

    get perusavain(){
        return this.#asetukset.perusavain;
    }

    get hakuavaimet(){
        return this.#asetukset.hakuavaimet;
    }

    get numeeriset(){
        return this.#asetukset.numerokentät
    }

    get resurssi(){
        return this.#asetukset.resurssi;
    }
    
    async haeKaikki(){
        return await this.#lukija.lueVarasto(this.#varastopolku);
    }

    async hae(avain,arvo){
        const tiedot = await this.#lukija.lueVarasto(this.#varastopolku);
        return tiedot.filter(alkio=>alkio[avain]==arvo);
    }

    async haeAvaimet(){
        try{
            const tiedot = await this.#lukija.lueVarasto(this.#varastopolku);
            const nimet = new Set(tiedot.flatmap(alkio=>Object.keys(alkio)));
            return [...nimet];
        }
    }

    
}
