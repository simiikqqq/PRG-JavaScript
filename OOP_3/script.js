class Faktura{
    static pocetFaktur = 0;

    constructor(){
        Faktura.pocetFaktur++;

        const rok = 2026;
        const poradi = String(Faktura.pocetFaktur).padStart(4, "0");  // nuly na zacatku + evidencni cislo
        this.cisloFaktury = `FA-${rok}-${poradi}`; // FA-2026-0001

        console.log(`Pocet faktur: ${Faktura.pocetFaktur}`);  // vypise pocet faktur
    }
}

const faktura = new Faktura();  // vytvoreni faktury
const faktura2 = new Faktura();

console.log(faktura.cisloFaktury);  // vypise cislo faktury
console.log(faktura2.cisloFaktury);
console.log(Faktura.pocetFaktur);  // vypise pocet faktur